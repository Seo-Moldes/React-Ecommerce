import { useContext, useEffect, useState } from "react";
import { Shop } from "../Context/Shopcontext";
import { products } from '../assets/Db/Products.db';
import { CardImg } from "../Components/CardImg/CardImg";
import { Link } from "react-router-dom";
import { CardImgProps } from "../Types/Types";


export const Cart: React.FC<CardImgProps> = () => {

  const [items, setItems] = useState(0);

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { getTotalItems, card, addPrice } = shopContext;

  useEffect(() => {

    setItems(getTotalItems())

  }, [items])

  const [price, setprice] = useState(0);

  useEffect(() => {

    setprice(addPrice())
  }, [card])

  // const { name } = props;

  /*total del carrito*/
  return (

    <>
      <div className="d-flex flex-row-reverse p-5 justify-content-around">
        <div className="w-25 m-5">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
         
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-center lh-sm">
              <div className="d-flex align-items-center gap-4 justify-content-around">
              <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{items}</span>
              </div>
              <span className="text-body-secondary"></span>
            </li>

            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">

            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>{price} $</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <button><Link to="/checkout" >Checkout({items})</Link></button>

            </div>
          </form>
        </div>

        {/*muestra las imagenes en la pagina del carrito*/}
        <div className="d-flex flex-column justify-content-start">{products.map((product) => {
          if (card[product.id] !== 0) {
            return (

              <CardImg id={product.id} name={product.name}
                img={product.img} price={product.price} key={product.id} />
            )

          }
        })}</div>

      </div>


    </>

  )
}


