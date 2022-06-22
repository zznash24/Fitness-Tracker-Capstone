import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../styles/Results.css";


const [expanded, setExpanded] = React.useState(false);
  const [exerciseId, setExerciseId] = React.useState(null);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoritesClick = async () => {
    alert("hi");
    const body = {
      bodyPart: props.data.bodyPart,
      equipment: props.data.equipment,
      gifURL: props.data.gifUrl,
      name: props.data.name,
      target: props.data.target,
    };
    //what happens if this fails?
    fetch("http://localhost:3001/exercises/target/addExercise", {
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
        setExerciseId(data[0].id);
        console.log(exerciseId);
      })
      .then(() => {
        const userId = 1; // hardcoding until login is set up
        console.log("in second then", exerciseId);
        // if userId or exerciseId are null, don't do this api call.. alert or something that tells
        // the user there was an error and can't save to favorites
        fetch(
          `http://localhost:3001/exercises/target/users/${userId}/${exerciseId}/addToFavorites`,
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

  // have access to the workout data. have access to user id.
  // hardcode for now but hook up with login
  // call the addExercise route (need a body with the workout data)
  // upon success, then call the addToFavorites route (exercise id from the call above plus the userId)


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest
//   })
// }));

function Results(props) {
//   const [expanded, setExpanded] = React.useState(false);


//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   }

  return (
    <li id={props.data.id} className='card-res'>
      <Card sx={{ maxWidth: 250 }}  variant="outlined" elevation={5}>
      
        <CardHeader variant="h5" component="div" title={props.data.name} />
        
          <CardMedia component="img"
            image={props.data.gifUrl} >
          </CardMedia>

          <CardContent> 
                <Typography><b>Target muscle: </b> {props.data.target}</Typography>
                <Typography><b>Body part used: </b> {props.data.bodyPart}</Typography>
                <Typography><b>Equipment: </b> {props.data.equipment}</Typography>
          </CardContent>
        
        < CardActions >
          {< Button variant="outlined" sx={{ width: '100%' }}>💙</Button>}
        </CardActions>
      </Card>
    </li>

  );
}

export default Results;
