import './PostList.css'
export default function PostList({posts}) {
    return (
        <>
            {posts.map(post => (
                <article>
                    <h3>{post.title}</h3>
                    <img src={post.imgSrc} alt={post.altImg}/>
                    <p>{post.description}</p>
                    <a href={post.href}>Czytaj więcej</a>
                </article>
            ))}
        </>
    )

}