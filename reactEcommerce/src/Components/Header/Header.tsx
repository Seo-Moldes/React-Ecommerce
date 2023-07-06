/*página header*/
import { Link } from "react-router-dom"
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { Shop } from "../../Context/Shopcontext";
import { retroGames } from "../../assets/img/Index";

/*muestra la cantidad de productos del carrito*/
export const Header = () => {
  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const [item, setitem] = useState(0);

  const { getTotalItems, card, loged, setloged } = shopContext;

  useEffect(() => {

    setitem(getTotalItems())

  }, [card])
  //logout
  const logout = () => {

    setloged(false);

  }

  /*muestra botones y carrito del header*/
  return (
    <>
      <header className="">
        <div className="">
          <div className="">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            </a>
          </div>

          <ul className="header list-group border-0 mb-4">
            <li className="d-flex col list-group-item border-0 justify-content-center align-items-center home"><Link to="/" className="d-flex nav-link px-2 fs-4 home-text">Home</Link></li>
            <li className="d-flex border-0 justify-content-center"><img className="d-flex w-25" src={retroGames} alt="" /></li>
            <li className="d-flex col list-group-item border-0 justify-content-center align-items-center cart"><Link to="cart" className="nav-link px-2 col"><i className="bi bi-cart-fill cart-image fs-1">
              <span className="cart-number">{(item === 0) ? '' : (item)}</span></i></Link> {(loged === true) ? (<button className="btn me-2 button-logout" onClick={logout}>Logout</button>) :
                (<Link to="/login" className="btn me-2 login-text">Login</Link>)} </li>


          </ul>

        </div>
      </header>
    </>
  )
}
