/*interface de datos entre la pagina principal y el carrito*/
import { createContext, useEffect, useState } from 'react'
import { products } from '../assets/Db/Products.db';
import { CartItems, ShopContextValue, typeProps } from '../Types/Types';

export const Shop = createContext<ShopContextValue | null>(null);

export const Shopcontext = (props:typeProps) => {
//crea el carrito vacio
const getDefaultCard = ():CartItems => {

let card: CartItems = {};

for(let i = 0; i < products.length; i++ ){

   const productId = products[i].id; 
   card[productId] = 0;

}

return(
card
)
} 

 const [card, setCard] = useState<CartItems>(getDefaultCard());
 
 useEffect(() => {
    
  
  }, [card])

//la cantidad de objetos que hay en el carrito
const getTotalItems = () => {


    let total = 0;

    for (const item in card) {
        total += card[item];
    }


    return total;
}
//agregar al carrito
const addToCard = (id:any): void => {

    setCard((prev) => ({...prev, [id]:prev[id]+1}))

}
//remover del carrito
const removeToCard = (id:any): void => {

    setCard((prev) => ({...prev, [id]:prev[id]-1}))

}

    const contextValue: ShopContextValue = {card, addToCard, removeToCard, getTotalItems };
    

  return (

    <>
    <Shop.Provider value={contextValue}> {props.children} </Shop.Provider>
    </>
  )
}
