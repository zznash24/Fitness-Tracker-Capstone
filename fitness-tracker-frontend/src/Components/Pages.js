import Pagination from '@mui/material/Pagination';

function PageN({ itemsPerPage, totalItems, page, setPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      className='Pagination'
      count={pageNumbers.length}
      page={page}
      onChange={(event, value) => {setPage(value);}}
    />
  );
}

export default PageN;