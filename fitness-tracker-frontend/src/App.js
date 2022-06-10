import './App.css';
import WorkoutApp from './Componenets/WorkoutApp';
import Grid from '@mui/material/Grid';

function App() {
  


  return (

    <div className="App">
      <header className="App-header">
        <h1>The Workout Zone</h1>
      </header>


      <Grid>
      <WorkoutApp />
      </Grid>


    </div>
  );
}

export default App;
