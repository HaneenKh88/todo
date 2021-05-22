import React, { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo.js'
import PaginationProvider from './components/context/pagination-context';
import Auth from './components/auth/auth.js';
import { LoginContext } from './components/auth/context.js';
import Login from '../src/components/auth/login';
import SignUp from '../src/components/auth/signup';
import './App.css';
// import PagesProvider from './context/Pages';
const EditLink = () => {
	return (
		<Auth capability="update">
			<span>Edit</span>
		</Auth>
	);
};

const DeleteLink = () => {
	return (
		<Auth capability="delete">
			<span>Delete</span>
		</Auth>
	);
};
export default function App () {
  const loginContext = useContext(LoginContext);
    return (
      <>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="mr-auto" href="#home">Home</Navbar.Brand>
      <Login />
	  <SignUp />
      </Navbar>
     
      <If condition={loginContext.loggedIn}>
				<Then> 
				
						<ToDo />
					
				 </Then>
				<Else>
					<div></div>
				</Else>
			</If>
			
		 <EditLink />
		<DeleteLink />

       
      </>
    );
  
}

