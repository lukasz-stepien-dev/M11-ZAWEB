import './Section.css';


export default function Section({icon, header, body, center}) {
    return <div className={`Section`}>
        <img height={'80px'} src={icon} alt={header}/>
        <h2 className={`${center}`}>{header}</h2>
        <p className={`${center}`}>{body}</p>
    </div>
}