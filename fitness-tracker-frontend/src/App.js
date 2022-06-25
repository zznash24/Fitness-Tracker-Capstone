import './App.css';
import WorkoutApp from './Components/WorkoutApp';
import Header from './Components/Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import FavoritesList from './Pages/FavoritesList';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import WorkoutDash from './Pages/WorkoutDash';


function App() {

  const [username, setUsername] = useState(null)
  const [userId, setUserId] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      {/* <Login /> */}

      <div className="Nav">
        { !userId ?<Link to="/login">Login</Link>: ''}
        { !userId ?<Link to="/signup">SignUp</Link>: ''}
        { userId ?<Link to="/favorites">Favorites</Link>: ''}
        { userId ?<Link to="/dashboard">Search for Workouts</Link>: !''}
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login username={username} setUsername={setUsername} userId={userId} setUserId={setUserId} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<WorkoutDash userId={userId} />} />
          <Route path="/favorites" element={<FavoritesList userId={userId} />} />

        </Routes>
      </div>

    </div>
  );
}

export default App;
