import './headerPage.scss'
import {Container} from "react-bootstrap";
import {headerPageCards} from "./headerPage.js";

const HeaderPage = () => {
    return (
        <div className='headerPage'>
            <Container>
                <div className="headerPage__title">Лечение и протезирование зубов по Европейским стандартам</div>
                <div className="headerPage__info">Предоставим 2-3 плана качественного лечения под ваш бюджет</div>
                <div className="headerPage__text">Запишитесь на <span>бесплатную</span> первичную консультацию -
                    диагностику зубов
                </div>
                <div className='headerPage__button'>
                    <button className='headerPage__button__style'>Записаться</button>
                </div>
            </Container>
            <div className="headerPage__cards">
                {headerPageCards.map((headerPageCard) =>
                    <div key={headerPageCard.key} className="headerPage__cards__card">
                        <img className='headerPage__cards__card__icon' src={headerPageCard.icon} alt=""/>
                        <div className="headerPage__cards__card__content">
                            <div className="headerPage__cards__card__content__title">{headerPageCard.title}</div>
                            <div className="headerPage__cards__card__content__text">{headerPageCard.text}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderPage;