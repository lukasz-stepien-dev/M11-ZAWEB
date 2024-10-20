import './Header.css';
export default function Header() {
    return (
        <>
            <section className={'navbar'}>
                <h2>Blog o Lotach</h2>
                <nav>
                    <a href={'#'}>STRONA GŁÓWNA</a>
                    <a href={'#'}>O MNIE</a>
                    <a href={'#'}>BLOG</a>
                    <a href={'#'}>KONTAKT</a>
                </nav>
            </section>
            <header>
                <h1>Witaj na moim blogu o lotach!</h1>
                <p>Znajdziesz tu informacje i ciekawostki o podróżach litnicznych.</p>
            </header>
        </>
    )
}