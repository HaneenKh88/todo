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

<div key={`inline-radio`} className="mb-3" style={{ marginBottom:"10px", backgroundColor:"#2A2A2A", color:"white", width:"400px", height:"40px", textAlign:"center"}} size="lg">
         <Form.Check
           
						inline
						label="Sort Items by Difficulty"
						name="sort"
						type="radio"
						id={`inline-radio-1`}
						onClick={() => {
						
							let sorted = pagination.list.sort(
								(item1,item2)=>   item1.difficulty > item2.difficulty ? 1 : -1 
							);
							pagination.setList([...sorted]);
              console.log("sorted", sorted)
						}}
            />

<Form.Check
           
           inline
           label="Sort Items by completed"
           name="sort"
           type="radio"
           id={`inline-radio-2`}
           onClick={() => {
          	let sorted = pagination.CompleteItems.filter(
              (item) => item.complete === true );
              pagination.setCompleteItems([...sorted]);
              console.log("sorted", sorted);
              
            
          }}
           />

</div>

      <Form.Control style={{marginLeft:"-80px" , marginBottom:"10px"}} as="select" size="lg" custom onChange={Handler}>
                <option> items/page </option>
                <option value='3'> 3 </option>
                <option value='6'> 6 </option>
                <option value='9'> 9 </option>
            </Form.Control>
      </>
    );
  
}
export default ChengeNumberOfPages;