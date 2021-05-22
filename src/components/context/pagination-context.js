import React ,{useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination (props) {
    let [list, setList] = useState([]);
    let [CompleteItems, setCompleteItems] = useState([]);
    const [current, setcurrent] = useState(1);
    const [itemPerPage, setItemforPage] = useState(3);
    const LastItem = current * itemPerPage;
    const FirstItem = LastItem - itemPerPage;
     list = props.list ;
     CompleteItems = props.list.filter(
      (item) => item.complete === true );
    let currentItem = props.list.slice(FirstItem, LastItem);
    const pages = pageNumber => setcurrent(pageNumber);
    const setItem  = numberOfPages => setItemforPage(numberOfPages);


 const state = {
  

    list,
    setList,
    current,
    itemPerPage,
    pages,
    currentItem,
    setcurrent,
    setItemforPage,
    setItem ,
    CompleteItems,
    setCompleteItems
   
 }
 
    return (
      <PaginationContext.Provider value={state}>
        {props.children}
      </PaginationContext.Provider>
    );
  
}

export default Pagination;