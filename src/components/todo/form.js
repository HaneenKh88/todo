import React from 'react';
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'
import  useForm  from '../../hooks/form';

// import { useState } from 'react';


function TodoForm(props) {
  const [item,handleInputChange,handleSubmit] = useForm(props);

  console.log(item);

  return (
    <>
      

      <Form className="form" onSubmit={handleSubmit}>
      <h3>Add Item</h3>
      <br></br>
        <Form.Group controlId="ToDoItem">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
        </Form.Group>
      
        <br></br>
        <Form.Group controlId="TaskAssign">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Group>
        <br></br>
    
        <Form.Group controlId="DiffcultyRating">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
        
      </Form>

    </>
  );
}


export default TodoForm;
