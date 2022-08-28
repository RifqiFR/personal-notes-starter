import React from "react";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      title: "",
      maxLength: 50,
    };

    this.onTitleEventListener = this.onTitleEventListener.bind(this);
    this.onBodyEventListener = this.onBodyEventListener.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  onBodyEventListener(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onTitleEventListener(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxLength),
      };
    });
  }

  onSubmitEvent(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });
    alert("Berhasil Ditambahkan!");
  }

  render() {
    return (
      <div className="todo">
        <div className="head">
          <h3>Catatan Baru</h3>
        </div>
        <div className="form-notes-container">
          <form
            id="formDataNotes"
            ref="form"
            action=""
            method="post"
            name="myForm"
            onSubmit={this.onSubmitEvent}
          >
            <div className="form-group-input">
              <p className="caracter" name="word">
                Karakter Kata = {this.state.maxLength - this.state.title.length}{" "}
              </p>
              <input
                required
                type="text"
                value={this.state.title}
                name="title"
                id="title"
                onChange={this.onTitleEventListener}
                placeholder="title..."
              />
            </div>
            <div className="row">
              <div className="form-group-input">
                <textarea
                  required
                  value={this.state.body}
                  name="notes"
                  id="notes"
                  placeholder="notes..."
                  onChange={this.onBodyEventListener}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn-submit">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NotesApp;
