/*interface de datos entre la pagina principal y el carrito*/
import { createContext, useEffect, useState } from 'react'
import { products } from '../assets/Db/Products.db';
import { CartItems, ShopContextValue, typeProps } from '../Types/Types';

export const Shop = createContext<ShopContextValue | null>(null);

export const Shopcontext = (props: typeProps) => {
  //crea el carrito vacio
  const getDefaultCard = (): CartItems => {
  //guarda los productos del carrito en el localstorage
    const storedCart = localStorage.getItem("cart");
    let card: CartItems = {};

    if (storedCart) {
      card = JSON.parse(storedCart)

    } else {

      card = {}
      for (let i = 0; i < products.length; i++) {

        const productId = products[i].id;
        card[productId] = 0;

      }
    }

    return (
      card
    )
  }

  const [card, setCard] = useState<CartItems>(getDefaultCard());

  //la cantidad de objetos que hay en el carrito
  const getTotalItems = () => {


    let total = 0;

    for (const item in card) {
      total += card[item];
    }


    return total;
  }
  //agregar al carrito
  const addToCard = (id: any): void => {

    setCard((prev) => ({ ...prev, [id]: prev[id] + 1 }))

  }
  //remover del carrito
  const removeToCard = (id: any): void => {

    setCard((prev) => ({ ...prev, [id]: prev[id] - 1 }))

  }
  //añadir precio al carrito
  const addPrice = () => {
    let total = 0;

    for (let item in card) {

      if (card[item] > 0) {
        let itemInfo = products.find((product) => product.id.toString() == item)
        total += card[item] * itemInfo!.price
      }
    }
    console.log(total)

    return total
  }

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(card));
    addPrice()

  }, [card])

  const contextValue: ShopContextValue = { card, addToCard, removeToCard, getTotalItems, addPrice };


  return (

    <>
      <Shop.Provider value={contextValue}> {props.children} </Shop.Provider>
    </>
  )
}
