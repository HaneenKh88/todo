import React, { useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from "../../hooks/axious";
import ChangeNumberOfPages from './itemperpage'
import Pagination from './pagination';
import PaginationContext from '../context/pagination-context'


import "./todo.scss";



const ToDo = () => {
  const [list,_addItem, _toggleComplete, _getTodoItems,deleteTodo ] = useAjax();



  useEffect(() =>
  {
    document.title=`To Do List: complete ${list.filter(item => item.complete).length}`
  })

  useEffect(_getTodoItems, []);

  return (
    <div className="form-container">
       <header>
          <Navbar className="CountBar"expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
          To Do List Manger {list.filter(item => !item.complete).length} 
          </Navbar.Brand>
          </Navbar >
        </header>
      <br></br>
      <Container fluid="md">
      
        <Row className="justify-content-md-center">
          <div>
					<Col sm={3}>
						<Card style={{width:"300px"}}>
							<Card.Body style={{width:"300px"}}>
								<Card.Text>
									<TodoForm handleSubmit={_addItem} />
                 
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
         </div>
         <PaginationContext list={list}>
        
					<Col md={{ span: 6, offset: 2 }}>
          <ChangeNumberOfPages/>
         
          <TodoList list={list} handleComplete={_toggleComplete}  handleDelete ={deleteTodo}/>
        
					</Col>
          <Pagination 
        totalitems={list.length}
      />
          </PaginationContext>
				</Row>
       
      </Container>
      
    </div>
    
  );
};

export default ToDo;