import {navigations} from "./navbarHeader.js";
import {Container, Row} from "react-bootstrap";
import './navbarHeader.scss'
import {NavLink} from "react-router-dom";


const NavbarHeader = () => {
    return (
        <div className='navbar__header'>
            <Container>
                <Row>
                    <ul className='navbar__header__list'>
                        {navigations.map((navigation) =>
                            <li key={navigation.key}>
                                <NavLink className='navbar__header__list' to={navigation.href}>
                                    {navigation.nav}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </Row>
            </Container>
        </div>
    );
};

export default NavbarHeader;