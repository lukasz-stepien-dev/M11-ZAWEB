import './PopUp.css';

export default function PopUp({text = 'Lorem Ipsum', top, left}) {
    return <div style={{marginTop: `${top}px`, marginLeft: `${left}%`}} className={'PopUp'}>
       <p>{text}</p>
    </div>
}