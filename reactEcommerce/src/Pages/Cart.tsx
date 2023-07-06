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

  }, [card])

  const [price, setprice] = useState(0);

  useEffect(() => {

    setprice(addPrice())
  }, [card])

  /*total del carrito*/
  /* cart total */
  return (

    <>
      <div className="d-flex flex-row-reverse p-5 justify-content-around">
        <div className="w-25 m-5">
          <h4 className="d-flex justify-content-between align-items-center mb-3">

          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-center lh-sm">
              <div className="d-flex align-items-center gap-4 justify-content-around">
                <span className="cart-color">Your cart</span>
                <span className="badge bg-primary rounded-pill number-color">{items}</span>
              </div>
              <span className="text-body-secondary"></span>
            </li>

            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">

            </li>
            <ul className="list-group mb-3">
              {products.map((product) => {
                if (card[product.id] !== 0) {
                  return (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{product.name}</h6>

                      </div>
                      <span className="price-color">{product.price}$</span>
                    </li>
                  )
                }
              }
              )}
            </ul>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              {/*redondea los decimales*/}
              {/*round decimal places*/}
              <strong>{price.toFixed(2)} $</strong>
            </li>
          </ul>


          <div className="input-group">
            <button className="btn button-checkout"><Link className="link-checkout" to="/checkout" >Checkout({items})</Link></button>
          </div>

        </div>

        {/*muestra las imagenes en la pagina del carrito*/}
        {/*show the images on the cart page*/}
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


