import React, { useState } from 'react';
import WorkSearch from './WorkSearch';
import SearchWork from '../Hooks/SearchWork';
import Listresult from "./resultList";
import PageN from './Pages';


function WorkoutApp() {
    const [values, searchByInputHolder, searchInputTerm, handleChangeFunc] = searchTerms();
    const [result, searchTags, show, handleSubmitFunc] = SearchWork();
    const [itemsPerPage] = useState(5);
    const [page, setPage] = React.useState(1);
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentResults = result.slice(indexOfFirstItem, indexOfLastItem);

    const resultList = <Listresult data={currentResults} searchTags={searchTags} numResults={result.length} />;
    let pagination;


    if (!show) {
        pagination = null;
      } else if (result.length === 0) {
        pagination = null;
      } else {
        pagination = <PageN itemsPerPage={itemsPerPage} totalItems={result.length} page={page} setPage={setPage} />
      }

return (
    <div>
        <WorkSearch
              handleChange={handleChangeFunc}
              handleSubmit={handleSubmitFunc}
              searchByInputHolder={searchByInputHolder}
              searchInputTerm={searchInputTerm}
              values={values} />
        <div>
            {resultList}
        </div>
        {pagination}
    </div>
)
}

export default WorkoutApp;