import React, { useContext } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
import { PaginationContext }  from '../context/pagination-context'

const TodoList = (props) => {
  const pagination = useContext(PaginationContext);
  return (
    <div className="class">
    <ListGroup className="list" >
      {pagination.currentItem.map((item) => (
          <Toast
            action
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            onClose={() => props.handleDelete(item._id)}
          >
            <Toast.Header >
              <Badge pill  variant={item.complete ? "success" : "danger"}>{item.complete ? "Complete" : "Pending..."}</Badge>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body onClick={() => props.handleComplete(item._id)}>
              {item.text}
              <div class="difficulty">difficulty : {item.difficulty}</div>
            </Toast.Body>
          </Toast>
      ))}
    </ListGroup>
    </div>
  );
};

export default TodoList;