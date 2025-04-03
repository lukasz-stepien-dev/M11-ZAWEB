import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";
export default function Calculator() {
    const [amount, setAmount] = useState(0);
    const [interest, setInterest] = useState(0);
    const [months, setMonths] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    return (
        <div className="calculator">
            <form className={'form-group'} onSubmit={(event) => {
                event.preventDefault()
                let calcMonthlyPayment = (amount * (interest / 100) / 12) / (1 - Math.pow(1 + (interest / 100) / 12, -months));
                setMonthlyPayment(calcMonthlyPayment);
            }}>
                <label className={'form-label'} htmlFor={'amount'}>Kwota:</label>
                <input className={'form-control'} type={'number'} id={'amount'} value={amount} onChange={(event) => {setAmount(event.target.value)}}/>
                <label className={'form-label'} htmlFor={'interest'}>Oprocentowanie:</label>
                <input className={'form-control'} type={'number'} id={'interest'} value={interest} onChange={(event) => {setInterest(event.target.value)}}/>
                <label className={'form-label'} htmlFor={'months'}>Liczba miesięcy:</label>
                <input className={'form-control'} type={'number'} id={'months'} value={months} onChange={(event) => {setMonths(event.target.value)}}/>
                <button type="submit" className={'btn btn-success'}>Oblicz</button>
            </form>
            <div className={'result'}>
                <h3>Twoja rata miesięczna wynosi: {monthlyPayment.toFixed(2)} PLN</h3>
            </div>
        </div>
    )
}