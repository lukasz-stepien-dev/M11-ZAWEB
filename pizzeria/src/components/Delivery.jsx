import './Delivery.css';

export default function Delivery() {
    return <section className={'delivery'}>
        <h2>Oblicz koszt dostawy</h2>
        <form>
            <label>
                <input type="checkbox"/>
                Jestem z zielonej góry
            </label>
            <p>albo</p>
            <label>
                Podaj ilość kilometrów od Zielonej Góry
                <input type="number"/>
            </label>
            <br />
            <input type={'submit'} value={'Oblicz'}/>
        </form>
    </section>
}