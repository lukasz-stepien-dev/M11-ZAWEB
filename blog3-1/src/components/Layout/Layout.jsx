import './Layout.css';

export default function Header({width= 100, height= 10, text = 'Lorem Ips'}) {
    return <div style={{width: `${width}%`, height: `${height}%`}} className={'Layout'}>
        <p>{text}</p>
    </div>
}