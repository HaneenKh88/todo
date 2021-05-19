import React, { useContext } from 'react';

import { PaginationContext }  from '../context/pagination-context';
import {Form} from 'react-bootstrap';
import './todo.scss';

function ChengeNumberOfPages  () {

const pagination = useContext(PaginationContext);
const Handler = (e) =>{
    pagination.setItem(e.target.value)
}
  
    return (
      <>

      <br></br>
      <Form.Control style={{marginLeft:"-80px" , marginBottom:"15px"}} as="select" size="lg" custom onChange={Handler}>
                <option> items/page </option>
                <option value='3'> 3 </option>
                <option value='6'> 6 </option>
                <option value='9'> 9 </option>
            </Form.Control>
      </>
    );
  
}
export default ChengeNumberOfPages;