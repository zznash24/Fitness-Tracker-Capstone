import './App.css';
import WorkoutApp from './Componenets/WorkoutApp';
import Grid from '@mui/material/Grid';
import Header from './Componenets/Header';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header />
      </header>


      <Grid className='body-grid'>
        <WorkoutApp />
      </Grid>


    </div>
  );
}

export default App;
