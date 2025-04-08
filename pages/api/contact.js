import { MongoClient } from "mongodb";

async function saveMessageHandler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      const connectionString =
        "mongodb+srv://patilsign108:Sasneh%403575.@namastenode.kaygu.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode";
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Database connection failed" });
      return;
    }
    const db = client.db("sign-blog");
    try {
      const result = await db.collection("my-blog").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    res.status(201).json({
      message: "Successfully stored the message",
      data: newMessage,
    });
  }
}

export default saveMessageHandler;
