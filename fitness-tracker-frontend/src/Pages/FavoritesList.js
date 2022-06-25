import StopWatch from '../Components/Stopwatch';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';
import "../styles/FavoritesList.css";
import SavedExercises from '../Components/savedExercises';


  fetch('http://localhost:3001/favorites/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
     
    }).then(res => res.json()).then(data => {
      console.log(data)
      
    })
  
  return (
    <div className="Fav">
      <Container>
        <Grid item>
          <StopWatch />
        </Grid>
        <Grid item>
          <Paper><SavedExercises />Empty Div to display fav work outs</Paper>
          
        </Grid>
      </Container>
    </div>
  );


export default FavoritesList;
