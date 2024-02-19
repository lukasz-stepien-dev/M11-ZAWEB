import './Aside.css';
import logo from '../assets/pizzeria.png';

export default function Aside() {
    return <aside>
        <p>U nas zamówisz pizzę z dowozem</p>
        <a href={logo}>Nasze logo</a>
    </aside>
}