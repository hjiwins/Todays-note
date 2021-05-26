import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(true);
  }

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (newNote.content =="") {
      alert("내용을 작성해주세요😅");
    } else {
      console.log(newNote);
      props.onAdd(newNote);
      setNewNote({
        title: "",
        content: "",
      });
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="목표"
            value={newNote.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="오늘 하고 싶은 것을 쓰세요..."
          required={true}
          rows={isExpanded ? 3 : 1}
          value={newNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
