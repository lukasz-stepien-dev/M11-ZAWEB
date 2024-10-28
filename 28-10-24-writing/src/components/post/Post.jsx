import './Post.css';

export default function Post({ posts }) {
    return (
        <section className={'posts'}>
            {posts.map(post => (
                <article className={'post'}>
                    <p>{post.text}</p>
                </article>
            ))}
        </section>
    )
}