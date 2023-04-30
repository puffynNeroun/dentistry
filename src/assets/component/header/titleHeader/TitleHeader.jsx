import './titleHeader.scss'
import {Col, Container, Row} from "react-bootstrap";
import logo from '../../../../images/logo.svg'
import {addressTimes} from "./titleHeader.js";
import {socialMedias} from "./titleHeader.js";
import {numbers} from "./titleHeader.js";
import Burger from "./Burger.jsx";
import {NavLink} from "react-router-dom";

const TitleHeader = () => {
    return (
        <div className='title__header'>
            <Container>
                <Row className='title__header__container'>
                    <Col xs={3} className='headerLogo'>
                        <NavLink className='headerLogo' to={'/'}>
                            <Col xs={1}>
                                <div className='header__logo'>
                                    <img className='header__logo__img' src={logo} alt=""/>
                                </div>
                            </Col>
                            <Col xs={2} className='header__logo__content'>
                                <span className='header__logo__text'>Стоматологическая <br/> клиника </span>
                            </Col>
                        </NavLink>
                    </Col>
                    {addressTimes.map((addressTime) =>
                        <Col className='header-info' key={addressTime.key} xs={2}>
                            <div className='header__info'>
                                <div className="header__info__address">
                                    <img className='header__info__address__img' src={addressTime.icon} alt=""/>
                                    <span className='header__info__address__title'
                                          style={{color: '#099DBA'}}>{addressTime.title}</span>
                                </div>
                                <div className="header__info__text">{addressTime.text}</div>
                            </div>
                        </Col>
                    )}
                    <Col xs={2} className='none__col'></Col>
                    <Col xs={1} className='header__icons'>
                        {socialMedias.map((socialMedia) =>
                            <div key={socialMedia.key} className="header__icons__icon">
                                <img className="header__icons__icon__img" src={socialMedia.icon} alt=""/>
                            </div>
                        )}
                    </Col>
                    <Col xs={2} className='header__numbers'>
                        {numbers.map((number) =>
                            <div key={number.key} className="header__numbers__number">
                                <span>{number.nmb}</span>
                            </div>
                        )}
                        <button className='header__numbers__button'>Перезвоните мне</button>
                    </Col>

                    <Burger/>

                </Row>
            </Container>
        </div>
    );
};

export default TitleHeader;