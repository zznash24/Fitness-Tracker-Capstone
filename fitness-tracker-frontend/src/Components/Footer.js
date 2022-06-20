import React from 'react';
// import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/system/Container';


function Footer() {
  
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `/favorites`; 
  //   navigate(path);
  // }
  
  return (
     <div className="save-work">
      <Container>       
          <Button 
          variant='contained' 
          sx={{ width: '50%' }}
          className="px-4"
          // onClick={routeChange}
          >
              Go To Your Workout!
            </Button>
       </Container>
    </div>
  );
}

export default Footer;