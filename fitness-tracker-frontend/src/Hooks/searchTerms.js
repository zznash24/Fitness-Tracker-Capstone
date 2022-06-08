import React, { useState } from "react";


const startSearchTerms = {
    searchTerm: "",
    searchBy: ""
};

export default input => {
  const [values, setValues] = useState(startSearchTerms);
  const searchByInputHolder = values.searchBy;
  const searchInputTerm = values.searchTerm.replace('%20').toLowerCase();

    const handleChangeFunc = (event) => {
        const { name, value } = event.target;
        setValues({...values, [name]: value});
    };

    return [values, searchByInputHolder, searchInputTerm, handleChangeFunc];
}