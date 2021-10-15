import React from "react";
import axios from "axios";
import { APIUrl } from  "../constants.js"

// material-ui
import { makeStyles } from "@mui/styles";
import { Button, ClickAwayListener, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: " 15px 20px",
    display: "flex",
    justifyContent: "center",
  },
  newNoteBlock: {
    backgroundColor: "#fff",
    borderColor: "#e0e0e0",
    width: "500px",
    borderRadius: "8px",
    boxShadow: "0px 1px 2px rgb(0 0 0 / 25%)",
    display: "flex",
    paddingLeft: "18px",
    alignItems: "center",
  },
  expandedBlock: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingRight: "15px",
  },
  saveButton: {
    position: "relative !important",
    left: "407px",
    backgroundColor: "whitesmoke !important",
    width: "fit-content",
  },
}));

function NewNote({ fetchData }) {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [note, setNote] = React.useState("");

  const postData = async () => {
    await axios({
      method: "post",
      url: APIUrl,
      data: { title, note1: note, priority: "Low" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const saveHandle = async () => {
    await postData();
    setTitle("");
    setNote("");
    fetchData();
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={() => setExpand(false)}>
        <div
          className={classes.newNoteBlock}
          style={{
            minHeight: expand ? "120px" : "46px",
            maxHeight: "fit-content",
          }}
        >
          {expand ? (
            <div className={classes.expandedBlock}>
              <TextField
                value={title}
                variant="standard"
                fullWidth
                style={{ marginTop: "15px" }}
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  shrink: false,
                  placeholder: "Title ",
                }}
              />
              <TextField
                value={note}
                variant="standard"
                fullWidth
                onChange={(e) => setNote(e.target.value)}
                autoFocus={true}
                multiline
                InputProps={{
                  disableUnderline: true,
                  shrink: false,
                  placeholder: "Take a note ...",
                }}
              />
              <Button
                className={classes.saveButton}
                style={{ marginBottom: "15px" }}
                onClick={() => saveHandle()}
              >
                Save
              </Button>
            </div>
          ) : (
            <div onClick={() => setExpand(true)}>
              <InputLabel
                fullWidth
                placeholder="Take a note ..."
                shrink={false}
              >
                {"Take a note ..."}
              </InputLabel>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default NewNote;
