import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

let category = ['Wybierz Opcje', 'Komediowy', 'Obyczajowy', 'Sensacyjny', 'Horror']

function App() {
    const [name, setName] = useState('');
    const [filmId, setFilmId] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`tytuł: ${name}, rodzaj: ${filmId}`);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor={'name'}>Tytuł filmu</label>
                    <input
                        type={'text'}
                        className={'form-control'}
                        id={'name'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor={'id'}>Rodzaj</label>
                    <select
                        className={'form-control'}
                        id={'id'}
                        value={filmId}
                        onChange={(e) => setFilmId(e.target.value)}>
                        {category.map((cat, index) => (
                            <option key={index} value={index}>
                                {cat}
                            </option>
                        ))}
                        )
                    </select>
                    <button type={'submit'} className={'btn btn-primary mt-2'}>Zapisz</button>
                </div>
            </form>
        </div>
    );
}

export default App;