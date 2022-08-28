import React from "react";
import NotesList from "./Body/NotesList";
import NotesInput from "./Body/NotesInput";
import { getInitialData, showFormattedDate } from "../utils/index";
import EmptyMessage from "./Action/EmptyMessage";
import SearchNav from "./Search/NoteSearch";

class PersonalNotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
      notetwo: showFormattedDate(new Date()),
    };

    this.addContactEventSubmit = this.addContactEventSubmit.bind(this);
    this.onDeleteEventListener = this.onDeleteEventListener.bind(this);
    this.onArchivedEventListener = this.onArchivedEventListener.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteEventListener(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchivedEventListener(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  addContactEventSubmit({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: this.state.notetwo,
          },
        ],
      };
    });
  }

  onSearchEventHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const nonActiveNotes = this.state.notes.filter((note) => {
      return note.archived === false;
    });

    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <div className="app">
        <section id="content">
          <nav>
            <SearchNav onSearch={this.onSearchEventHandler} />
          </nav>
          <main>
            <div className="head-title">
              <div className="left">
                <h1>Dashboard</h1>
              </div>
            </div>
            <div className="table-data">
              <NotesInput addNote={this.addContactEventSubmit} />
              <div className="grid">
                <div className="order">
                  <div className="heads">
                    <h3>Catatan Aktif</h3>
                  </div>
                  {nonActiveNotes.length > 0 ? (
                    <NotesList
                      keyword={this.state.keyword}
                      notes={nonActiveNotes}
                      onDelete={this.onDeleteEventListener}
                      onArchived={this.onArchivedEventListener}
                    />
                  ) : (
                    <EmptyMessage />
                  )}
                </div>
                <div className="order">
                  <div className="heads">
                    <h3>Catatan Di Arsipkan</h3>
                  </div>
                  {activeNotes.length > 0 ? (
                    <NotesList
                      keyword={this.state.keyword}
                      notes={activeNotes}
                      onDelete={this.onDeleteEventListener}
                      onArchived={this.onArchivedEventListener}
                    />
                  ) : (
                    <EmptyMessage />
                  )}
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    );
  }
}

export default PersonalNotesApp;
