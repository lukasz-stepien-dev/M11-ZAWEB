import './Navbar.css';

function Navbar() {
    return <div id={'navbar'}>
            <div style={{backgroundColor: 'red'}} id={'menu'} className={'bar'}><p>menu</p></div>
            <div style={{backgroundColor: 'orange'}} className={'bar'}><p>gorące dyskusje</p></div>
            <div style={{backgroundColor: 'yellow'}} className={'bar'}><p>inny block</p></div>
            <div style={{backgroundColor: 'green'}} className={'bar'}><p>zielona belka</p></div>
            <div style={{backgroundColor: 'lightblue'}} className={'bar'}><p>ostatnio dodane</p></div>
            <div style={{backgroundColor: 'rebeccapurple'}} className={'bar'}><p>panel użytkownika</p></div>
        </div>
}

export default Navbar;
