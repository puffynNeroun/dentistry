import {Col} from "react-bootstrap";
import './burger.scss'
import {navigations} from "../navbarHeader/navbarHeader.js";
import {addressTimes, numbers, socialMedias} from "./titleHeader.js";

const Burger = () => {
    return (
        <Col xs={7} className='burger'>
            <button className='burger__button'>
                <span className='burger__button__style'></span>
                <span className='burger__button__style'></span>
                <span className='burger__button__style'></span>
            </button>

            <ul className='burger__menu'>
                {navigations.map((navigation) =>
                    <li key={navigation.key}>

                        {navigation.nav}

                    </li>
                )}
                <div className='burger__menu__icon'>
                    {socialMedias.map((socialMedia) =>
                        <div key={socialMedia.key} className="burger__menu__icon__icons">
                            <img className="burger__menu__icon__icons__img" src={socialMedia.icon} alt=""/>
                        </div>
                    )}
                </div>
                {addressTimes.map((addressTime) =>
                    <div key={addressTime.key} className='burger__menu__info'>
                        <div className="burger__menu__info__address">
                            <img className='burger__menu__info__address__img' src={addressTime.icon} alt=""/>
                            <span className='burger__menu__info__address__title'
                                  style={{color: '#099DBA'}}>{addressTime.title}</span>
                        </div>
                        <div className="burger__menu__info__text">{addressTime.text}</div>
                    </div>
                )}
                <div className='burger__menu__numbers'>
                    {numbers.map((number) =>
                        <div key={number.key} className="burger__menu__numbers__number">
                            <span>{number.nmb}</span>
                        </div>
                    )}
                </div>
            </ul>
        </Col>
    );
};

export default Burger;