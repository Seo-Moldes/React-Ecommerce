import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { Login } from "../Pages/Login"
import { Layout } from "../Pages/Layout"
import { Card } from "../Pages/Card"
import { PreventMsg } from "../Pages/PrivateRoutes/PreventMsg"
import { WarningMsg } from "../Pages/PrivateRoutes/WarningMsg"
import { Checkout } from "../Pages/PrivateRoutes/Checkout"


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
