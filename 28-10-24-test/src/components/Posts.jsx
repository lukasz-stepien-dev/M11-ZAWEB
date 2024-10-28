import './Posts.css'
export default function Posts({postsContent}) {
    return (
        <section className={'posts'}>
            {postsContent.map(card => (
                <article className={'post-card'}>
                    <p className={'category'}>{card.category}</p>
                    <hr/>
                    <h2>{card.title}</h2>
                    <h3>{card.description}</h3>
                    <h4>
                        <div className={'dot'}></div>
                        {card.author}
                    </h4>
                    <div className={'infos'}>
                        <h4>
                            <div className={'dot'}></div>
                            {card.date}
                        </h4>
                        <h4>
                            {card.number}
                            <div className={'dot'}></div>
                        </h4>
                    </div>
                </article>
            ))}
        </section>
    )
}