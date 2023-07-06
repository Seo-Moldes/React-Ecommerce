import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart, Checkout, HomePage, Layout, Login, PreventMsg, WarningMsg } from "../Pages/Index"
import { ThankYou } from "../Pages/ThankYou"


export const Router = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart img={""} id={0} name={""} price={0} />} />
          <Route path="/thankyou" element={<ThankYou />} />

          {/*rutas protegidas*/}
          <Route path='/privateMsg' element={<WarningMsg />} />
          <Route path="/checkout" element={<PreventMsg />}>   
          <Route path="/checkout" element={<Checkout img={""} id={0} name={""} price={0} />} />

          </Route>


        </Route>

      </Routes>

    </BrowserRouter>
  )
}
