import Header from '../Components/Header';
import StopWatch from '../Components/Stopwatch';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function FavoritesList() {

  
  return (
    <div className="Fav">
      <Container>
        <Grid item>
          <StopWatch />
        </Grid>
        <Grid item>
          <Paper>Empty Div to display fav work outs</Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default FavoritesList;
