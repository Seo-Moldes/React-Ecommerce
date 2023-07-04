import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart, Checkout, HomePage, Layout, Login, PreventMsg, WarningMsg } from "../Pages/Index"

export const Router = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart img={""} id={0} name={""} price={0} />} />
          {/*rutas protegidas*/}
          <Route path='/privateMsg' element={<WarningMsg />} />
          <Route path="/checkout" element={<PreventMsg />}>   
            <Route path="/checkout" element={<Checkout />} />
          </Route>


        </Route>

      </Routes>

    </BrowserRouter>
  )
}
