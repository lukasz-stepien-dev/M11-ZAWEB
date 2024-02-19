import './Main.css';
import pizza from '../assets/Pizza.svg';
export default function Main() {
    return <main>
        <div>
            <h2>Pizzeria Margherita</h2>
            <p>ul. Botaniczna 4, Zielona Góra</p>
        </div>
        <img src={pizza} alt="pizza" height={'90%'}/>
    </main>
}