import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../../images/logo.svg";
import {navigations} from "../header/navbarHeader/navbarHeader.js";
import './footer.scss'


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='footer__container'>
                    <Col xs={3} className='footerLogo'>
                        <NavLink className='footerLogo' to={'/'}>
                            <Col xs={1}>
                                <div className='footer__logo'>
                                    <img className='footer__logo__img' src={logo} alt=""/>
                                </div>
                            </Col>
                            <Col xs={2} className='footer__logo__content'>
                                <span className='footer__logo__text'>Стоматологическая <br/> клиника </span>
                            </Col>
                        </NavLink>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={8}>
                        <ul className='footer__navbar__list'>
                            {navigations.map((navigation) =>
                                <li key={navigation.key}>
                                    <NavLink className='footer__navbar__list' to={navigation.href}>
                                        {navigation.nav}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;