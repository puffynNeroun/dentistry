
import TitleHeader from "./titleHeader/TitleHeader.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'
import NavbarHeader from "./navbarHeader/NavbarHeader.jsx";

const Header = () => {
    return (
        <>
            <header className='header'>
                <TitleHeader/>
                <NavbarHeader/>
            </header>
        </>
    );
};

export default Header;