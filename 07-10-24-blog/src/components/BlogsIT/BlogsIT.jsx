import './BlogsIT.css'
export default function BlogsIT({blogsIT}) {
    return (
        <section className="blogs-IT">
            {blogsIT.map(blogIT => (
                <section className={'blogIT'}>
                    <h4>{blogIT.title}</h4>
                    <p>{blogIT.description}</p>
                </section>
            ))}
        </section>
    )
}