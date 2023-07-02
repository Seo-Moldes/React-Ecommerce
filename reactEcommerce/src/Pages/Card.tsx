import { useContext, useEffect, useState } from "react";
import { Shop } from "../Context/Shopcontext";

export const Card = () => {

  const [items, setItems] = useState(0);
   
  const shopContext = useContext(Shop);
  if (!shopContext){
      return null;
  }
  const { getTotalItems } = shopContext;

useEffect(() => {
  
setItems(getTotalItems())
 
}, [items])

  return (
<>

<div><h2>carrito:{items}</h2></div>
<div><h2>precio:{items}</h2></div>

</>
   
  )
}
