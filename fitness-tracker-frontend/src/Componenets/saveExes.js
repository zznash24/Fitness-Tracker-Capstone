import React, { useState, useEffect } from "react";
import Exercises from "./Exercises";
import { Link } from "react-router-dom";

const saveExes = () => {
  const [exerciseList, setexerciseList] = useState("whateva");
  const [exercises, setexercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/exercises")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set(data);
      });
  }, []);

  const handleClick = (favorites) => {
    setfavoritesList(favorites);
  };

  const filterRender = () => {
    if (ratingList === "All Ratings") {
      return  (
        <Exercises
          exerciseList={ratings}
          rating={ratingList.toUpperCase()}
        />
      );
    } else {
    const filteredRatings = ratings.filter(
      (rating) => rating.name === ratingList
    );
    return filteredRatings.length > 0 ? (
      <Ratings ratingList={filteredRatings} rating={ratingList.toUpperCase()} />
    ) : (
      <Link to="/search"></Link>
    );
  }};

  return (
    <div className="lists-container">
      <div className="lists-title">Favorites</div>
      <div className="lists-options">
        <input
          type="button"
          className='"list-link'
          value=""
          onClick={() => handleClick("Like")}
        />
        <input
          type="button"
          className='"list-link'
          value=""
          onClick={() => handleClick("Remove")}
        />
      </div>
      
    </div>
  );
};

export default Lists;