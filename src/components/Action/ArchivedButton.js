import React from "react";

function ArchivedButton({ id, onArchived, isArchived }) {
  return (
    <div className="arzip">
      <button className="arsip" onClick={() => onArchived(id)}>
        {" "}
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default ArchivedButton;
