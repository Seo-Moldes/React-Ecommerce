/*navegacion de rutas privadas*/
/* private route navigation */

import { useContext } from "react";
import { Shop } from "../../Context/Shopcontext";
import { Navigate, Outlet } from "react-router-dom";


export const PreventMsg = () => {

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { getTotalItems } = shopContext;

  const condition = getTotalItems()

  if (condition == 0) {

    return (<Navigate to='/privateMsg' />)
  }
  return (

    <div><Outlet /></div>
  )
}
