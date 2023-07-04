/*página header*/
import { Link } from "react-router-dom"
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { Shop } from "../../Context/Shopcontext";

/*muestra la cantidad de productos del carrito*/
export const Header = () => {
  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const [item, setitem] = useState(0);
  
  const { getTotalItems, card } = shopContext;

useEffect(() => {
  
setitem(getTotalItems())
 
}, [card])

/*muestra botones y carrito del header*/
  return (
    <>
   <header className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
       <li><Link to="cart" className="nav-link px-2"><i className="bi bi-cart-fill cart-image"><span className="cart-number">{(item === 0) ? '':(item)}</span></i></Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
      </div>
    </div>
  </header>
  </>
  )
}
