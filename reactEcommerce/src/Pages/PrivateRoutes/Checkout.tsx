import React, { useContext, useState } from "react";
import { CardImgProps } from "../../Types/Types";
import { products } from "../../assets/Db/Products.db";
import { Shop } from "../../Context/Shopcontext";

//codigo promocional
const codes = [{
  code: 'Assembler',
  discount: 5
}]

/*pagina checkout*/
export const Checkout: React.FC<CardImgProps> = () => {
  //discount detecta la escritura de texto en el imput
  const [discount, setDiscount] = useState('')
  //acepteddiscount si fue aceptado el descuento
  const [acceptedDiscount, setAcceptedDiscount] = useState('')
  //accepted si el codigo que se ha puesto es correcto
  const [accepted, setAccepted] = useState(false)

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { card, getTotalItems, addPrice } = shopContext;
  /*lee el valor que esta puesto el imput y
  chequea cada uno de los valores qe esta en el arreglo de codigos
  si encuentra los dos valores iguales aplica el descuento*/
  const handleDiscount = (event: React.MouseEvent<HTMLButtonElement>)  => {    
    event.preventDefault();
    codes.forEach((code) => {
      if (discount === code.code) {

        setAccepted(true)
        setAcceptedDiscount(code.discount.toString())
      }
    })
  }

  return (
    <>
      <div className="container">
        <main>
          <div className="py-5 text-center">

            <h2 className="check-p">Checkout form</h2>
          </div>
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="check-p">Your cart</span>
                <span className="badge bg-primary rounded-pill number-color">{getTotalItems()}</span>
              </h4>
              <ul className="list-group mb-3">
                {products.map((product) => {
                  if (card[product.id] !== 0) {
                    return (
                      <li key={product.id} className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                          <h6 className="my-0 check-p">{product.name}</h6>
                        </div>
                        <span className="check-p">{product.price}$</span>
                      </li>
                    )
                  }
                }
                )}

                <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                  <div className="text-success">
                    <h6 className="my-0 check-p">Promo code</h6>
                  </div>
                  {/*si es true entonces muestra el numero y el %*/}
                  <span className="text-success check-p">{(accepted) ? acceptedDiscount + '%' : '0%'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  {/*el + le dice implicitamente que es un numero*/}
                  <strong>{(accepted) ? (+(addPrice().toFixed(2)) - +(addPrice().toFixed(2)) * + acceptedDiscount / 100).toFixed(2) : addPrice().toFixed(2)}$</strong>

                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  {/*input del descuento*/}
                  <input
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                    style={{ width: '100%' }}
                  />
                  <button onClick={(e) => handleDiscount(e)} type="submit" className="btn btn-secondary redeem-button">
                    Redeem
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3 check-p">Billing address</h4>
              <form className="needs-validation" noValidate={true}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label check-p">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      defaultValue=""
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label check-p">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      defaultValue=""
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="username" className="form-label check-p">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required={true}
                      />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label check-p">
                      Email <span className="check-p">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label check-p">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label check-p">
                      Address 2{" "}
                      <span className="check-p">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label check-p">
                      Country
                    </label>
                    <select className="form-select" id="country" required={true}>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label check-p">
                      State
                    </label>
                    <select className="form-select" id="state" required={true}>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label check-p">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required={true}
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                  />
                  <label className="form-check-label check-p" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label className="form-check-label check-p" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3 check-p">Payment</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked={true}
                      required={true}
                    />
                    <label className="form-check-label check-p" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required={true}
                    />
                    <label className="form-check-label check-p" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required={true}
                    />
                    <label className="form-check-label check-p" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label check-p">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required={true}
                    />
                    <small className="check-p">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">Name on card is required</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label check-p">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label check-p">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required={true}
                    />
                    <div className="invalid-feedback">Expiration date required</div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label check-p">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required={true}
                    />
                    <div className="invalid-feedback">Security code required</div>
                  </div>
                </div>
                <hr className="my-4" />
                <button className="w-100 btn btn-lg button-check" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
