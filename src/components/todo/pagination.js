import React, {useContext} from 'react';
import { PaginationContext }  from '../context/pagination-context'
import Form from "react-bootstrap/Form"

const Pagination = ({totalitems}) => {
  const numberOfThePage = [];
  const pagination = useContext(PaginationContext);

  for (let i = 1; i <= Math.ceil(totalitems / pagination.itemPerPage); i++) {
    numberOfThePage.push(i);
  }


  return (
    <>
   
    <div>
   
       <br></br>
       <br></br>
      <ul className='pagination'>
        {numberOfThePage.map(num => (
          <li key={num} className='page-item'>
            <a onClick={() => pagination.pages(num)}  className='page-link'>
              {num}
            </a>
          </li>
        ))}
      </ul>
      <ul className='pagination'>

      <li>
            <a onClick={pagination.current > 1 ? () => pagination.pages(pagination.current--): () => pagination.pages(pagination.current)}  className='page-link'>
              Previous
            </a>
          </li>

          <li >
            <a onClick={ numberOfThePage.length != pagination.current ? () => pagination.pages(pagination.current++): () => pagination.pages(pagination.current)}  className='page-link'>
              Next
            </a>
          </li>
      
      </ul>

     
				

    </div>
    </>
  );
};

export default Pagination;