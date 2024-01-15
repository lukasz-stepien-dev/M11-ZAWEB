import './Aside.css';
import Tag from "../Tag/Tag";
import Navbar from "../Navbar/Navbar";

function Aside() {
    return (
        <div id={'aside'}>
            <Tag text={'lewe_menu'}/>
            <Navbar/>
        </div>
    );
}

export default Aside;
