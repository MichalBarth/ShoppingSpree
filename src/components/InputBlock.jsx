import {Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputBlock({addItem}) {
    const [value, setValue] = useState("");
    return (
        <>
            <InputGroup>
                <Input onChange={e => setValue(e.target.value)} placeholder="Item name" />
                <InputGroupAddon addonType="prepend">
                    <Button onClick={() => addItem(value)}>Add item</Button>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}

export default InputBlock;