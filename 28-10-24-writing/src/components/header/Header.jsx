import './Header.css';
import handImg from './hand.jpg';

export default function Header() {
    return (
        <header>
            <nav>
                <a href='https://www.o2.pl'>o2.pl</a>
                <a href='https://www.onet.pl'>Onet.pl</a>
                <a href='https://www.wykop.pl'>Wykop.pl</a>
                <a href='https://www.interia.pl'>Interia.pl</a>
            </nav>
            <section>
                <h1>WRITING</h1>
                <img src={handImg}></img>
            </section>
        </header>
    )
}