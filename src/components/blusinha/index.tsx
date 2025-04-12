import "./style.css";
import blusaAzul from '../../assets/blusa-azul.png';
import pinkTop from'../../assets/pink-top.jpg';

interface BlusinhaProps {
    image: string;
    title: string;
    price: string;
}
const Blusinha = (props: BlusinhaProps) => {
    return (
        <div className="blusinha-box">
            <img className= "image" src = {props.image} alt= "Blusa Azul"/>
            <div className= "text">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default Blusinha;