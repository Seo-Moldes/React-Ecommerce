/*página del carrito*/
/* cart page */
import { useContext } from "react";
import { CardImgProps } from "../../Types/Types";
import * as imageCard from "../../assets/img/Index"
import { Shop } from "../../Context/Shopcontext";

/*muestra las imegenes en la página del carrito*/
/*show images on cart page*/
export const CardImg: React.FC<CardImgProps> = (props) => {

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { card, removeToCard } = shopContext;


  const { img, id, name, price } = props;

  return (
    <>
      <div className="w-100 align-items-start justify-content-around row row-cols-2 border order-primary mb-5 card-game">
        <div className="d-flex col p-3 border-0">
          {/* as keyof typeof fuerza el tipado de img para avisar de que es una llave de image card*/}
          {/* as keyof typeof forces img to be typed to say it is an image card key*/}
          <img className="w-75" src={imageCard[img as keyof typeof imageCard]} />
        </div>
        <div className="d-flex flex-column col justify-content-around p-5">
          <p className="card-p">Amount {card[id]}</p>
          <p className="card-p">{name}</p>
          <p className="card-p">{price} $</p>
          <button onClick={() => removeToCard(id)} type="button" className="btn btn-outline-secondary bin-paper">
            <i className="bi bi-trash3-fill"></i>
            <span className="visually-hidden">Button</span>
          </button>
        </div>


      </div>
    </>

  )
}
