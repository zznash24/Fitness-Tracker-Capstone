

const exercise = (param) => {




  const url = `https://exercisedb.p.rapidapi.com/exercises/target/${param}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      "X-RapidAPI-Key": "3e280e10camsh92162b5acf469e4p15ee1ejsn5ec32d8c9fb8",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

export default exercise;
