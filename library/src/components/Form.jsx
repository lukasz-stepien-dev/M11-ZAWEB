import './Form.css'

export default function Form() {
    return <section className={'form'}>
        <h2>Formularz kontaktowy</h2>
        <form>
            <label>
                Imię:
                <input type={'text'}/>
            </label>
            <br/>
            <label>
                Nazwisko:
                <input type={'text'}/>
            </label>
            <br/>
            <label>
                Symbol:
                <input type={'text'}/>
            </label>
            <br/>
            <label>
                <input type={'submit'} value={'DODAJ'}/>
            </label>
        </form>
    </section>
}