import Header from '../Components/Header';
import StopWatch from '../Components/Stopwatch';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {

    return (
  
      <div className="Fav">
        <header className="Fav-Header">
          <Header />
        </header>
  
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
  
  export default App;