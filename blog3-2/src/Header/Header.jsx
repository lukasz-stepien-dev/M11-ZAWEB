import './Header.css';
import human from './human.png';
import logo from './logo.png';

export default function Header() {
    return <header>
        <img height={'400px'} src={`${human}`} alt={'human'}/>
        <h1> When is the <span className={'bold'}>Right Time to</span><br/>Take a <span className={'bold'}>Business Loan</span>?</h1>
        <img className={'logo'} src={`${logo}`} alt={'logo'}/>
    </header>
}