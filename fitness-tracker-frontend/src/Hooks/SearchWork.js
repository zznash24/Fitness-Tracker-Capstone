import React, { useState } from "react";

const startSearchTerms = {
    searchTerm: "",
    searchBy: ""
};

export default search => {
    const [result, setResult] = useState([]);
    const [searchTags, setSearchTags] = useState(startSearchTerms);
    const [show, setShow] = useState(false);
    
    const handleSubmitFunc = (valuesParam, searchType, searchParam) => { 
            console.log(searchType, searchParam);
            console.log(valuesParam);
            setShow(true)
            setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });

            const url = `https://exercisedb.p.rapidapi.com/exercises/${valuesParam.searchBy}/${valuesParam.searchTerm}`;
            console.log(url);

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '5e8b9cb1f0msh09ab79c40301ed3p1d798djsnca9c961a0b9f'
            }
        };
        
        fetch(url, options)
	        .then(res => res.json())
                      

	        .then(function (json) {
                setResult(json); 
                
                console.log(result)
                console.log(json)})
            
	        .catch(err => console.error('error:' + err));

    }
 
    return [result, searchTags, show, handleSubmitFunc];
}
