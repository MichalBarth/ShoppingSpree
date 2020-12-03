import {Input, Button } from 'reactstrap';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputBlock({addItem}) {
    const [value, setValue] = useState("");
    return (
        <>
            <Input onChange={e => setValue(e.target.value)} placeholder="Item name" />
            <Button onClick={() => addItem(value)}>Add item</Button>
        </>
    )
}

export default InputBlock;