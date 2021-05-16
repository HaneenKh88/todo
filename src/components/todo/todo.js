import React from 'react';
import { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './todo.scss';

function ToDo (props) {
  const [list,setList] = useState([]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let Mylist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(Mylist);
    }

  };
  useEffect(() =>
  {
    document.title=`To Do List: Incomplete ${list.filter(item => !item.complete).length}`
  })
  useEffect(() =>
  {
    let Mylist = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(Mylist);
  },[]);

  
    return (
      <>
        <header>
          <Navbar className="CountBar"expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
          To Do List Manger {list.filter(item => !item.complete).length} 
          </Navbar.Brand>
          </Navbar >
        </header>

        <Container fluid="md" style={{ marginTop: '2rem' }}>

         <Row className="justify-content-md-center">
					<Col sm={3}>
						<Card>
							<Card.Body>
								<Card.Text>
									<TodoForm handleSubmit={addItem} />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={{ span: 6, offset: 1 }}>
						<TodoList list={list} handleComplete={toggleComplete} />
					</Col>
				</Row>
			</Container>
      </>
    );
  }


export default ToDo;
