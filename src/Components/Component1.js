//jshint esversion:8
import './Component1.scss';
import menuTop from '../images/menu-top.svg';
import ironhackLogo from '../images/ironhack-logo.svg';

const imageMenuTop = <img src={menuTop} alt="menu top" />;
const logo = <img src={ironhackLogo} alt="logo" />;

export const Component1 = () => {
    return (
    <section id='top'>
        <nav id='navbar'>
            {logo}
            {imageMenuTop}
        </nav>

        <h1>Say hello to <br/>ReactJS</h1>

        <p>You will learn how to use<br/> 
        the most popular frontend library,<br/> 
        and become a super Ninja developer.</p>

        <button>Awesome!</button>
    </section>)
}