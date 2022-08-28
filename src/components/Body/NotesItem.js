import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "../Action/DeleteButton";
import ArchivedButton from "../Action/ArchivedButton";

function NotesItem({ title, body, onDelete, id, onArchived, isArchived }) {
  return (
    <div className="notes-item">
      <NotesItemBody title={title} body={body} />
      <div className="action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton
          id={id}
          onArchived={onArchived}
          isArchived={isArchived}
        />
      </div>
    </div>
  );
}

export default NotesItem;
