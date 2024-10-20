import './Header.css';
export default function Header() {
    return (
        <header>
            <h1>Blogim!</h1>
            <nav>
                <a className={'blog'} href={'#'}>Home</a>
                <a className={'blog'} href={'#'}>New Blog</a>
                <a className={'gallery'} href={'#'}>Gallery</a>
                <a className={'gallery'} href={'#'}>New image</a>
            </nav>
        </header>
    );
}