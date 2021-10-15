import React, { useEffect } from "react";
import Card from "./card.jsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: " 15px 20px",
    display: "flex",
    flexWrap: "wrap"
  }

}));

function NoteGrid({fetchData, allNotes}) {
  const classes = useStyles();

  useEffect(() => {
    fetchData()
  })

  return (
    <div className={classes.root}>
        {allNotes.map((note) => (
            <Card title={note.title} content={note.note1} priority={note.priority}/> 
        ))}
    </div>
  );
}

export default NoteGrid;
