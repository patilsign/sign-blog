import React from "react";
import ReactDOM from "react-dom"
import classes from "./notification.module.css";
const Notification = (props) => {
  const { title, status, message } = props;
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }
  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
