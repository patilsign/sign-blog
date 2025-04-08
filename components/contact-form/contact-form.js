import React, { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notifications/notification";

async function sendContactData(messageData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(messageData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "something went wrong....");
  }
}
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRequestStatus(null);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    setRequestStatus("pending");
    const messageData = {
      email: email,
      name: name,
      message: message,
    };
    try {
      await sendContactData(messageData);
      setRequestStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (err) {
      setRequestStatus("error");
      setRequestError(err.message);
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message",
      message: "your message on way...",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success! ",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you.!</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Enter Email</label>
            <input
              type="text"
              value={email}
              id="email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              value={name}
              id="name"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Enter Message</label>
          <textarea
            rows={5}
            value={message}
            required
            id="message"
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
