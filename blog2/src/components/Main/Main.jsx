import './Main.css';
import Tag from "../Tag/Tag";

function Main() {
    return (
        <div id={'main'}>
            <Tag text={'#zawartosc'}/>
            <div className={'content'}>
                <h2>Suspendisse eu volutpat</h2>
                <h3>data: 24:00:00, 12.12.2012</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque
                    adipiscing sollicitudin. Proin <u><b>tempus</b></u> pulvinar accumsan. Suspendisse eu
                    volutpat quam. Pellentesque lacus nunc, rutrum fermentum hendrerit et,
                    tristique nec diam. Quisque venenatis, diam vitae pharetra malesuada, nisl
                    nunc bibendum nulla, nec consequat risus sem in turpis. Maecenas quis felis
                    vitae orci egestas dictum. Integer non aliquet arcu. Quisque lobortis
                    porttitor augue in malesuada. In ut vestibulum libero. Aliquam hendrerit
                    ultrices enim.</p>
            </div>
        </div>
    );
}

export default Main;
