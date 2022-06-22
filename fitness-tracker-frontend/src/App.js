import './App.css';
import WorkoutApp from './Components/WorkoutApp';
import Header from './Components/Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header />
      </header>

    <Container>
      <Grid className='body-grid'>
        <WorkoutApp />
      </Grid>
    </Container>


    </div>
  );
}

export default App;
