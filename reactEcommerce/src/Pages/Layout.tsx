import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header" 
import { Shopcontext } from "../Context/Shopcontext"

export const Layout = () => {

  return (
<>
<Shopcontext> 
<Header/>
<main>
<Outlet/>
</main>
<Footer/>
</Shopcontext>
</>
    
  )
}
