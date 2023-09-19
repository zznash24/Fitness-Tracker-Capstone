import { useState } from "react";

const startSearchTerms = {
  searchTerm: "",
  searchBy: "",
};

function SearchWork() {
  const [result, setResult] = useState([]);
  const [searchTags, setSearchTags] = useState(startSearchTerms);
  const [show, setShow] = useState(false);

  const handleSubmitFunc = (valuesParam, searchType, searchParam) => {
    console.log(searchType, searchParam);
    console.log(valuesParam);
    setShow(true);
    setSearchTags({
      searchTerm: valuesParam.searchTerm,
      searchBy: valuesParam.searchBy,
    });

    const url = `https://exercisedb.p.rapidapi.com/exercises/${valuesParam.searchBy}/${valuesParam.searchTerm}`;
    console.log(url);

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "d7e64b9d96mshab31c4df752e9cep1df2dfjsncf567034bfc0",
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setResult(json);
        console.log(json);
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  };

  return [result, searchTags, show, handleSubmitFunc];
}

export default SearchWork;