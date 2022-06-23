import './App.css';
import WorkoutApp from './Components/WorkoutApp';
import Header from './Components/Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FavoritesList from './Pages/FavoritesList';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header />
      </header>

    <Container>
      <Grid className='body-grid'>
        {/* <WorkoutApp /> */}
        <FavoritesList />
      </Grid>
    </Container>


    </div>
  );
}

export default App;
