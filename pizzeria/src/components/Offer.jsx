import './Offer.css';

export default function Offer() {
    return <section className={'offer'}>
        <h2>Oferta</h2>
        <ol>
            <li>Pizza</li>
            <li>Lasagne</li>
            <li>Sałatki</li>
        </ol>
        <button><a href={'https://www.dominospizza.pl/menu/promocje'}>Pobierz pełną ofertę</a></button>
    </section>
}