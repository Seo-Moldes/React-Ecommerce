//página login//
//page login//
import { useState, useContext } from 'react';
import { users } from "../assets/Db/Users";
import { Shop } from "../Context/Shopcontext";

//login/logout//
export const Login: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event: React.FormEvent) {

    event.preventDefault()
    const found = users.find(obj => { return obj.email === email && obj.password === password })
    console.log(found)

    localStorage.setItem("email", email)

    if (found) {

      setloged(true)

    } else {

    }

  }
  const shopContext = useContext(Shop);

  if (!shopContext) {

    return null;
  }
  const { setloged } = shopContext;


  //crea el formulario del login//
  //create the login form//
  return (
    <>

      <div className="container">

        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3 login-p">Login</h4>
          <form className="needs-validation">

            <div className="col-12">
              <label htmlFor="email" className="form-label email-p">Email
              </label>
              <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
            </div>

            <div className="col-12">
              <label htmlFor="password" className="form-label pass-p">
                Password
              </label>
              <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="password" placeholder="Enter Your password" required />

            </div>

            <hr />

            <button onClick={handleSubmit} className="w-100 btn btn-lg button-lgn" type="submit">
              Login
            </button>
          </form>
        </div>

      </div>

    </>
  )
}
