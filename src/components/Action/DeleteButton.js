import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <div className="delete">
      {" "}
      <button className="deleted" onClick={() => onDelete(id)}>
        Hapus
      </button>
    </div>
  );
}

export default DeleteButton;
