import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
   <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
       <li><Link to="card" className="nav-link px-2">Carrito</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
      </div>
    </header>
  </div>
  </>
  )
}
