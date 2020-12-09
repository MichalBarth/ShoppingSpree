import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

const Item = ({item, removeItem, copyItem, index}) => (
    <ListGroupItem>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Delete</Button>
        <Button onClick={() => copyItem(item)} color="info">Copy</Button>
    </ListGroupItem>
)

export default Item;