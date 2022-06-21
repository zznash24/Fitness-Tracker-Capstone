import React, { useState } from 'react';
import WorkSearch from './WorkSearch';
import searchTerms from '../Hooks/searchTerms';
import SearchWork from '../Hooks/SearchWork';
import Listresult from "./resultList";
import PageN from './Pages';
import Footer from './Footer';
import '../styles/WorkoutApp.css';



function WorkoutApp() {
    const [values, searchByInputHolder, searchInputTerm, handleChangeFunc] = searchTerms();
    const [result, searchTags, show, handleSubmitFunc] = SearchWork();
    const [itemsPerPage] = useState(6);
    const [page, setPage] = React.useState(1);

    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    console.log(result, indexOfLastItem, indexOfFirstItem);

    const currentResults = result.slice(indexOfFirstItem, indexOfLastItem);
    let pagination;


    

    if (!show) {
        pagination = null;
      } else if (result.length === 0) {
        pagination = null;
      } else {
        pagination = <PageN itemsPerPage={itemsPerPage} totalItems={result.length} page={page} setPage={setPage} />
      }

      const resultList = <Listresult data={currentResults} searchTags={searchTags} numResults={result.length} />;
return (
    <div>
        <WorkSearch
              handleChange={handleChangeFunc}
              handleSubmit={handleSubmitFunc}
              searchByInputHolder={searchByInputHolder}
              searchInputTerm={searchInputTerm}
              values={values} />
        <div className='cards' container spacing={3}>
            {resultList}
        </div>
        <hr />
        {pagination}
        <Footer />
    </div>
  );
}

export default WorkoutApp;
