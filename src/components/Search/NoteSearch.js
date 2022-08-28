import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <form>
      <div className="form-input">
        <input
          type="search"
          placeholder="Search..."
          onChange={(event) => onSearch(event.target.value)}
        />
        <span className="search-icon">
          <i className="bx bx-search"></i>
        </span>
      </div>
    </form>
  );
}

export default NoteSearch;
