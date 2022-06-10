import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));


function Results(props) {
  const [expanded, setExpanded] = React.useState(false);
  
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  
  return (
    <li id={props.data.id}>
      <Card>
        <CardActions>
          <CardHeader
            action={
              <ExpandMore 
                expand={expanded} 
                onClick={handleExpandClick}>
                  <ExpandMoreIcon />
              </ExpandMore>
            }

            title={props.data.name} />
        </CardActions>
        <Collapse in={expanded}>
          <CardContent>
            <CardMedia component="img"
              image={props.data.gifUrl}>
            </CardMedia>
            <Typography><b>Target muscle:</b> {props.data.target}</Typography>
            <Typography><b>Body part used:</b> {props.data.bodyPart}</Typography>
            <Typography><b>Equipment required:</b> {props.data.equipment}</Typography>
            <Box>
              {<Button>Save to WorkOut!</Button>}
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </li>
    
  );
}
      
export default Results;
