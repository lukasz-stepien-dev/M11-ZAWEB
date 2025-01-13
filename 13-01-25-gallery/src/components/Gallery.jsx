import photosArray from "../photoRepository";
import './Gallery.css';

const photoList = Object.keys(photosArray);
export default function Gallery() {
    return(
        <section className={'gallery'}>
            {photoList.map(photo => (
                <img className={'photo'} src={photosArray[photo]} alt={photo}/>
            ))}
        </section>
    )
}