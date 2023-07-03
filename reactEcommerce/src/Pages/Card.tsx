import { useContext, useEffect, useState } from "react";
import { Shop } from "../Context/Shopcontext";
import { products } from "../assets/Db/Products.db";
import { CardImg } from "../Components/CardImg/CardImg";
import { Link } from "react-router-dom";


export const Card = () => {

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

  return (

    <>

      <div>{products.map((product) => {
        if (card[product.id] !== 0) {
          return (

            <CardImg id={product.id} name={product.name}
              img={product.img} price={product.price} key={product.id} />
          )

        }
      })}</div>

<div>{price}</div>

<button><Link to="/checkout">Checkout</Link></button>

    </>

  )
}
