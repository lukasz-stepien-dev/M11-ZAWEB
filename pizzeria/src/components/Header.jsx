import './Header.css';
import logo from '../assets/pizzeria.png';

export default function Header() {
    return <header>
        <h1>Najlepsza pizza w mieście</h1>
        <img src={logo} alt="logo" height={'150px'}/>
    </header>
}