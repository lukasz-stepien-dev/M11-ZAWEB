import './Banner.css'
export default function Banner({bannerContent}) {
    return (
        <section className={'banner'}>
            {bannerContent.map(card => (
                <article className={'banner-card'}>
                    <img src={card.imgSrc} alt={card.title}/>
                    <p className={'category'}>{card.category}</p>
                    <h2>{card.title}</h2>
                    <h3>{card.description}</h3>
                    <h4>
                        <div className={'dot'}></div>
                        {card.author}
                    </h4>
                    <div>
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