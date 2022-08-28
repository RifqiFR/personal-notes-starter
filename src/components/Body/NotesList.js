import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ keyword, notes, onDelete, onArchived, onActive }) {
  if (notes.length > 0) {
    notes = notes.filter((note) => {
      if (keyword === "") {
        return note;
      }
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          id={note.id}
          onArchived={onArchived}
          onActive={onActive}
          isArchived={note.archived}
        />
      ))}
    </div>
  );
}

export default NotesList;
