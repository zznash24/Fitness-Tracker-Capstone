import React, { useState } from 'react';
import Results from "./Results";
import WorkSearch from './WorkSearch';
import SearchWork from '../Hooks/SearchWork';


function WorkoutApp() {
    // const [values, searchByInputHolder, searchInputTerm, handleChangeFunc] = InputState();
    const [result, searchTags, show, handleSubmitFunc] = SearchWork();

return (
    <div>
        <WorkSearch
              handleChange={handleChangeFunc}
              handleSubmit={handleSubmitFunc}
              searchByInputHolder={searchByInputHolder}
              searchInputTerm={searchInputTerm}
              values={values} />
        <div>
            
        </div>
    </div>
)
}

export default WorkoutApp;