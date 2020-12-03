import {Navbar, NavbarBrand, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation({count}) {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Shopping Cart</NavbarBrand>
                <NavItem>{count}</NavItem>
            </Navbar>
        </div>
    )
}

export default Navigation;