import React from "react";
import { showFormattedDate } from "../../utils/index";

function NotesItemBody({ title, body }) {
  return (
    <div className="notes-item-body">
      <h3 className="notes-item-title">{title}</h3>
      <span className="date-text">{showFormattedDate(new Date())}</span>
      <p className="notes-item-body">{body}</p>
    </div>
  );
}

export default NotesItemBody;
