import "./App.css";
import WorkoutApp from "./Components/WorkoutApp";
import Header from "./Components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FavoritesList from "./Pages/FavoritesList";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Container>
        <Grid className="body-grid">
          <WorkoutApp />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
