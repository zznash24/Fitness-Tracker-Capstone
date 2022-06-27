import StopWatch from "../Components/Stopwatch";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import "../styles/FavoritesList.css";
import SavedExercises from "../Components/savedExercises";
import Listresult from "../Components/resultList";
import "../styles/WorkoutApp.css";

const FavoritesList = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/favorites/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let favoritesLists = data.favorites.map((favorite) => {
          return {
            bodyPart: favorite.exercise.bodyPart,
            equipment: favorite.exercise.equipment,
            gifUrl: favorite.exercise.gifURL,
            name: favorite.exercise.name,
            target: favorite.exercise.target,
          };
        });
        setFavorites(favoritesLists);
      });
  }, []);

  return (
    <div className="Fav">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <StopWatch />
        </Grid>
        <Grid item xs={8}>
          <Paper >
            <SavedExercises />
            <div className='cards' container>
              <Listresult data={favorites} userId={userId} />

            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FavoritesList;
