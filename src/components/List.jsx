import React from 'react';
import { ListGroup } from 'reactstrap';
import Item from "./Item.jsx";

const List = ({value, removeItem, copyItem}) => (
    <ListGroup>
        {value.map((item, index) => (<Item index={index} item={item} removeItem={removeItem} copyItem={copyItem}/>))}
    </ListGroup>
)

export default List;