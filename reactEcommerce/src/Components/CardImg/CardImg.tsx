/*página del carrito*/
import { useContext } from "react";
import { CardImgProps } from "../../Types/Types";
import * as imageCard from "../../assets/img/Index"
import { Shop } from "../../Context/Shopcontext";

/*muestra las imegenes en la página del carrito*/
export const CardImg: React.FC<CardImgProps> = (props) => {

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { card, removeToCard } = shopContext;


  const { img, id, name, price } = props;

  return (
    <>
      <div className="card card-lm card-shadow w-100 align-items-center m-2">

        {/* as keyof typeof fuerza el tipado de img para avisar de que es una llave de image card*/}
        <img className="w-25 m-5" src={imageCard[img as keyof typeof imageCard]} />
        <p>Amount {card[id]}</p>
        <p>{name}</p>
        <p>{price} $</p>

        <button onClick={() => removeToCard(id)} type="button" className="btn btn-outline-secondary">
          <i className="bi bi-trash3-fill"></i>
          <span className="visually-hidden">Button</span>
        </button>

      </div>
    </>

  )
}
