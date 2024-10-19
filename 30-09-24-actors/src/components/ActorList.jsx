import Content from "./Content";
import './ActorList.css';

export default function ActorList() {
    const list = Content.map((actor) => (
        <tr>
            <td>
                <img src={actor.image}/>
            </td>
            <td>
                <p>{actor.firstName}</p>
                <p>{actor.lastName}</p>
            </td>
            <td>{actor.description}</td>
            <td>
                <a href={actor.bioUrl}>{actor.bioName}</a>
            </td>
        </tr>
    ))
    return (
        <table>
            {list}
        </table>
    )
}
