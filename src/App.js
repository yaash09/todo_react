import React, { useCallback } from 'react'; 
import axios from 'axios';
import { APIUrl } from  "./constants.js"

// material-ui
import { makeStyles } from  '@mui/styles';
import { Typography } from '@mui/material';

// project imports
import NewNote from './components/NewNote.jsx';
import NoteGrid from "./components/NoteGrid.jsx";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    height: "40px",
    padding: "10px 29px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxShadow: "0px 1px 2px rgb(0 0 0 / 25%)",
  },
}));



function App() {
  const classes = useStyles();
  const [allNotes, setAllNotes] =React.useState([])
  
  const fetchData = useCallback(() => {
    axios.get(APIUrl)
    .then(res => {
        console.log(res)
        const notes = res.data;
        setAllNotes(notes);
    }) 
  },[])

  return (
    <>
    <div className={classes.headerContainer}>
      <Typography color="primary" variant="title" > Keep Note</Typography>
    </div>
    <NewNote  fetchData={fetchData}/>
    <NoteGrid fetchData={fetchData} allNotes={allNotes}/>
    </>
  );
}

export default App;
