import React ,{useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination (props) {
    const [current, setcurrent] = useState(1);
    const [itemPerPage, setItemforPage] = useState(3);
  
    const LastItem = current * itemPerPage;
    const FirstItem = LastItem - itemPerPage;
    const list = props.list.sort((item1,item2)=>   item1.difficulty < item2.difficulty ? -1 : 1 );
    let currentItem = list.slice(FirstItem, LastItem);
    const pages = pageNumber => setcurrent(pageNumber);
    const setItem  = numberOfPages => setItemforPage(numberOfPages);

 const state = {
    current,
    itemPerPage,
    pages,
    currentItem,
    setcurrent,
    setItemforPage,
    setItem ,

 }
 
    return (
      <PaginationContext.Provider value={state}>
        {props.children}
      </PaginationContext.Provider>
    );
  
}

export default Pagination;