import {Input, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Add = () => {
    return (
        <>
            <InputGroup>
                <InputGroupAddon addonType="append">
                    <InputGroupText>
                        <Button color="success" onClick="">Add</Button>
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    onChange={(e)=>{
                    e.target.value}}   
                    placeholder="Item num. 3" />
            </InputGroup>
        </>
    )
}

export default Add;