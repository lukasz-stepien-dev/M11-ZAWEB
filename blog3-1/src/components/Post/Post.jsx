import './Post.css';

export default function Post({header, body}) {
    return <div className={'Post'}>
        <h2>{header}</h2>
        <p>{body}</p>
    </div>
}