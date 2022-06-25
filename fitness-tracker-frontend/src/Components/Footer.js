import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
// import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';


function Footer() {
  
  const navigate = useNavigate(); 
  const workoutroute = () =>{ 
    let path = '/favorites'; 
    navigate(path);
  }
  
  return (
     <div className="save-work">
      <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="flex-end">       
          <Button 
          variant='contained' 
          sx={{ width: '25%' }}
          className="px-4"
          onClick={workoutroute}
          >
              Go To Your Workout!
            </Button>
       </Grid>
    </div>
  );
}

export default Footer;