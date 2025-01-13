import arrowLeft from './arrow_left.png';
import arrowRight from './arrow_right.png';
import photos from '../photoRepository';
import './View.css';
export default function View() {
    return (
        <section className={'view'}>
            <img className={'arrow'} src={arrowLeft} alt={'arrow left'}/>
            <img className={'viewing-photo'} src={photos['gdansk']} alt={'Gdańsk'}/>
            <img className={'arrow'} src={arrowRight} alt={'arrow right'}/>
        </section>
    )
}