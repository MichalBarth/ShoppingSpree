import {Navbar, NavbarBrand, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Shopping Cart</NavbarBrand>
            <NavItem>Count</NavItem>
        </Navbar>
    </div>
    )
}

export default Navigation;