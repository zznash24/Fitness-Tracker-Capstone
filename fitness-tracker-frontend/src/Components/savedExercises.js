import { useState, useEffect } from "react";
import Card from "./Results";

const SavedExercises = () => {
  const [exerciseType, setExerciseType] = useState("All Types");
  const [exercise, setExercise] = useState([]);

  const handleExerciseTypeClick = (id, e) => {
    console.log(e.target.value);
    setExerciseType(e.target.value);
    const body = { exercise: e.target.value };
    fetch(`http://localhost:3001/Exercise/1/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExercise(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/exercise")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExercise(data);
      });
  }, []);

  const filterRender = () => {
    if (setExercise === "All Types") {
      return exercise.map((exercise) => (
        <Card
          bodyPart={exercise.bodyPart}
          equipment={exercise.equipment}
          gifURL={exercise.gifURL}
          name={exercise.name}
          target={exercise.target}
          onClick={(e) => handleExerciseTypeClick(exercise.id, e)}
        />
      ));
    } else {
      const filteredExercise = exercise.filter(
        (exercise) => exercise.type === exerciseType
      );
      return filteredExercise.length > 0 ? (
        filteredExercise.map((exercise) => (
          <Card
            bodyPart={exercise.bodyPart}
            equipment={exercise.equipment}
            gifURL={exercise.gifURL}
            name={exercise.name}
            target={exercise.target}
            onClick={(e) => handleExerciseTypeClick(exercise.id, e)}
          />
        ))
      ) : (
        <p className="no-exercises">No Exercises</p>
      );
    }
  };
};

export default SavedExercises;
