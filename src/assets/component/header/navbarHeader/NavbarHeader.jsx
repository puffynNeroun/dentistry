import {navigations} from "./navbarHeader.js";
import {Container, Row} from "react-bootstrap";
import './navbarHeader.scss'


const NavbarHeader = () => {
    return (
        <div className='navbar__header'>
            <Container>
                <Row>
                    <ul className='navbar__header__list'>
                        {navigations.map((navigation) =>
                            <li key={navigation.key}>

                                {navigation.nav}

                            </li>
                        )}
                    </ul>
                </Row>
            </Container>
        </div>
    );
};

export default NavbarHeader;