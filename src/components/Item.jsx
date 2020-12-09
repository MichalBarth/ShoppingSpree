import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

const Item = ({item, removeItem, index}) => (
    <ListGroupItem>
        {item}
        <Button onClick={() => removeItem(index)}>Delete</Button>
    </ListGroupItem>
)

export default Item;