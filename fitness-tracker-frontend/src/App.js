import './App.css';
import WorkoutApp from './Components/WorkoutApp';
import Header from './Components/Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import FavoritesList from './Pages/FavoritesList';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Login />
      <div className="Nav">
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/FavoritesList">FavoritesList</Link>
        </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/FavoritesList" element={<FavoritesList />} />
        </Routes>
      </div>

    <Container>
      <Grid className='body-grid'>
        <WorkoutApp />
      </Grid>
    </Container>


    </div>
  );
}

export default App;
