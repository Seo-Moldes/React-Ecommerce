import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Card, Checkout, HomePage, Layout, Login, PreventMsg, WarningMsg } from "../Pages/Index"

export const Router = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="card" element={<Card />} />

          <Route path='/privateMsg' element={<WarningMsg />} />
          <Route path="/checkout" element={<PreventMsg />}>   //Es una pagina que engloba a otra. //Payment tiene un Navigate que si no se cumple x condicion te lleva a /privateMsg
          <Route path="/checkout" element={<Checkout />} />
          </Route>


        </Route>

      </Routes>

    </BrowserRouter>
  )
}
