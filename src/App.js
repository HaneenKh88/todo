import React from 'react';
import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo.js'
import './App.css';
// import PagesProvider from './context/Pages';

export default function App () {
 
    return (
      <>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="mr-auto" href="#home">Home</Navbar.Brand>
      </Navbar>

  
			<ToDo />
		

       
      </>
    );
  
}

