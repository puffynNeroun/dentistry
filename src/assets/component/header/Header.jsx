
import TitleHeader from "./titleHeader/TitleHeader.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'
import NavbarHeader from "./navbarHeader/NavbarHeader.jsx";
import HeaderPage from "./headerPage/HeaderPage.jsx";

const Header = () => {
    return (
        <>
            <header className='header'>
                <TitleHeader/>
                <NavbarHeader/>
                <HeaderPage/>
            </header>
        </>
    );
};

export default Header;