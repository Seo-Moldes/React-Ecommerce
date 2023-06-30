import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"

export const Layout = () => {

  return (
<>

<Header/>
<main>
<Outlet/>
</main>
<Footer/>

</>
    
  )
}
