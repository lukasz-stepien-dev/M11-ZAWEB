import './AboutUs.css';
import booksPng from '../assets/books.png';

export default function AboutUs() {
    return <section className={'about-us'}>
        <h2>ul. Czytelnicza 25,<br />Książkowice Wielkie</h2>
        <a href={'#'}>Napisz do nas</a>
        <section className={'images'}>
            <img src={booksPng} alt={'books'} width={100}/>
            <img src={booksPng} alt={'books'} width={100}/>
        </section>
    </section>
}