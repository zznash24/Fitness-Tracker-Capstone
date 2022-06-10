import React, { useState } from "react";

const startSearchTerms = {
  searchTerm: "",
  searchBy: "",
};

function SearchWork(search) {
  const [result, setResult] = useState([]);
  const [searchTags, setSearchTags] = useState(startSearchTerms);

  const handleSubmitFunc = (valuesParam, searchType, searchParam) => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/${searchType}/${searchParam}`,
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "5e8b9cb1f0msh09ab79c40301ed3p1d798djsnca9c961a0b9f",
      },
    };

    if (valuesParam.searchTerm !== "") {
      return fetch(options)
        .then(function (response) {
          setResult(response.data);
          setSearchTags({
            searchedTerm: valuesParam.searchTerm,
            searchedBy: valuesParam.searchBy,
          });
        })
        .catch(function (error) {
          setResult([]);
          setSearchTags({
            searchedTerm: valuesParam.searchTerm,
            searchedBy: valuesParam.searchBy,
          });
        });
    } else {
      setResult([]);
    }
  };

  return [result, searchTags, handleSubmitFunc];
}

export default SearchWork;
