import React from 'react';

const ListGroup = (props) => {
    const{items, textProperty, valueProperty,selectedItem, onItemSelect}=props;
    return <ul className="list-group m-2">
    <li className="list-group-item bg-dark text-white font-monospace" >SELECT GENERES FILTER</li>
    {items.map(item=><li onClick={()=>onItemSelect(item)} key={item[valueProperty]} className={item===selectedItem? "list-group-item active": "list-group-item"}>{item[textProperty]}</li>)}
  </ul>;
};
ListGroup.defaultProps={
    textProperty: "name",
    valueProperty: "_id"

}
 
export default ListGroup;