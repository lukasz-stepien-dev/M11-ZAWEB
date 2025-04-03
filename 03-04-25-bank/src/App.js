import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import Calculator from "./components/Calculator";

function App() {
    const [pesel, setPesel] = useState('');
    const [peselValid, setPeselValid] = useState(false);

    return (
        <div className="App">
            <form className={'form-group'} onSubmit={(event) => {
                event.preventDefault();
                if (checkPesel(pesel)) {
                    setPeselValid(true)
                } else {
                    alert("Niepoprawny PESEL");
                    setPeselValid(false)
                }
            }}>
                <label className={'form-label'} htmlFor={'pesel'}>PESEL</label>
                <input
                    className={'form-control'}
                    id={'pesel'}
                    type={"text"}
                    value={pesel}
                    onChange={(e) => setPesel(e.target.value)}
                />
                <input
                    value={'Sprawdź PESEL'}
                    type={"submit"}
                    className={'btn btn-success'}
                />
            </form>
            {peselValid && <Calculator></Calculator>}
        </div>
    );
}

function checkPesel(pesel) {
    const peselString = pesel.toString();
    const peselArray = peselString.split('').map(Number);
    if (peselArray.length !== 11) {
        return false;
    }
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const sum = peselArray.slice(0, -1).reduce((acc, digit, index) => acc + digit * weights[index], 0);
    const checksum = (10 - (sum % 10)) % 10;
    return checksum === peselArray[10];
}

export default App;