import React, { useState } from 'react';import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import "../styles/Results.css";


  function Results(props) {  


    const handleFavoritesClick = async () => {
      const userId = props.userId;
      const body = {
        bodyPart: props.data.bodyPart,
        equipment: props.data.equipment,
        gifURL: props.data.gifUrl,
        name: props.data.name,
        target: props.data.target,
      };
      //what happens if this fails?
      fetch("https://the-workout-zone.herokuapp.com/exercises/target/addExercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(data[0].id);
          const exerciseId = data[0].id;
          console.log(exerciseId);
       
          console.log("in second then", exerciseId);
          console.log(userId);
          fetch(
            `https://the-workout-zone.herokuapp.com/exercises/target/users/${userId}/${exerciseId}/addToFavorites`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    };

  return (
    <li id={props.data.id} className='card-res'>
      <Card sx={{ maxWidth: 250 }} variant="outlined" elevation={5}>

        <CardHeader variant="h4" component="div" title={props.data.name} />

        <CardMedia component="img"
          image={props.data.gifUrl} >
        </CardMedia>

        <CardContent>
          <Typography><b>Target muscle: </b> {props.data.target}</Typography>
          <Typography><b>Body part used: </b> {props.data.bodyPart}</Typography>
          <Typography><b>Equipment: </b> {props.data.equipment}</Typography>
        </CardContent>

        < CardActions >
          {< Button variant="outlined" sx={{ width: '100%' }} onClick={handleFavoritesClick}>💙</Button>}
        </CardActions>
      </Card>
    </li>

  );
}

export default Results;
