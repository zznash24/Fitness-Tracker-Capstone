import React, { useState } from "react";

const startSearchTerms = {
    searchTerm: "",
    searchBy: ""
};

export default search => {
    const [result, setResult] = useState([]);
    const [searchTags, setSearchTags] = useState(startSearchTerms);
    
    const handleSubmitFunc = (valuesParam, searchType, searchParam) => { 

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/${searchType}/${searchParam}`,
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': 'd7e64b9d96mshab31c4df752e9cep1df2dfjsncf567034bfc0'
            }
        };
        
        if (valuesParam.searchTerm !== ""){
            return fetch(options)
	        .then(function (response) {
                setResult(response.data); 
                setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });

            }).catch(function (error){
                setResult([]);  
                setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });
                           
            });
        } else {
            setResult([]);
        }
    }
 
    return [result, searchTags, show, handleSubmitFunc];
}
