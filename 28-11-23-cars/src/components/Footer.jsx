import car from "../img/car.png";
export default function Footer() {
    return (
        <footer>
            <a href="#">Kwerendy</a>
            <p>Autor: Łukasz Stępień</p>
            <img src={car} alt={"Auto"}/>
        </footer>
    );
}