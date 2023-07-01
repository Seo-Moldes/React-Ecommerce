/*interface de datos entre la pagina principal y el carrito*/
import { createContext, useState } from 'react'
import { products } from '../assets/Db/Products.db';
import { CartItems, ShopContextValue, typeProps } from '../Types/Types';

const ShopContext = createContext({});

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
//la cantidad de objetos que hay en el carrito
const getTotalItems = () => {

    let total = 0;

for (let i = 0; i< card.lenght; i++ ) {

total += card[i];
}


    return total;
}
//agregar al carrito
const addToCard = (id:any) => {

    setCard((prev) => ({...prev, [id]:prev[id]+1}))

}
    const contextValue: ShopContextValue = {card, addToCard};


  return (

    <>
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
    </>
  )
}
