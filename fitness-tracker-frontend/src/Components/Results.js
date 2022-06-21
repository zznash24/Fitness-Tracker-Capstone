import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import "../styles/Results.css";


function Results(props) {

  return (
    <ul id={props.data.id} className='card-res'>
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
          {< Button variant="outlined" sx={{ width: '75%' }}>💙</Button>}
        </CardActions>
      </Card>
    </ul>

  );
}

export default Results;
