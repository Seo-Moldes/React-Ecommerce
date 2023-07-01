import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { Login } from "../Pages/Login"
import { Layout } from "../Pages/Layout"
import { Card } from "../Pages/Card"


export const Router = () => {

  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    
    <Route index element={<HomePage/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="card" element={<Card/>}/>

    </Route>
        
    </Routes>
    
    </BrowserRouter>
  )
}
