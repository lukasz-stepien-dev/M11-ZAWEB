import './Blogs.css'
export default function Blogs({ blogs }) {
    return (
        <section className={'blogs'}>
            <h2>All blogs</h2>
            <hr />
            {blogs.map(blog => (
                <article className={'blog'}>
                    <section className={'blog-info'}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                        <p>{blog.lastPostDate}, {blog.lastPostTime}</p>
                    </section>
                    <img src={blog.imgSrc} alt={blog.title} />
                </article>
            ))}
        </section>
    )
}