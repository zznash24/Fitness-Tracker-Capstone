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
        <ul>
        { !userId ?<li><Link to="/login">Login</Link></li>: ''}
        { !userId ?<li><Link to="/signup">SignUp</Link></li>: ''}
        { userId ?<li><Link to="/favorites">Favorites</Link></li>: ''}
        { userId ?<li><Link to="/dashboard">Search for Workouts</Link></li>: ''}
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login username={username} setUsername={setUsername} userId={userId} setUserId={setUserId} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<WorkoutDash userId={userId} />} />
         {userId ? <Route path="/favorites" element={<FavoritesList userId={userId} />} />: ''}

        </Routes>
      </div>

    </div>
  );
}

export default App;
