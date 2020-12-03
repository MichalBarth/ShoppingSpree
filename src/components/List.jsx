import React from 'react';
import { ListGroup } from 'reactstrap';
import Item from "./Item.jsx";

const List = ({value}) => (
    <ListGroup>
        {value.map((item, index) => (<Item index={index} item={item}/>))}
    </ListGroup>
)

export default List;