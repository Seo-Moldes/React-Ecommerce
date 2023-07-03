import { Shopcontext } from './Context/Shopcontext';
import { Router } from './Routes/Router.routes';
import "./App.css"

export function App() {
  
  return (
    <>
   <Shopcontext>
   <Router/>
   </Shopcontext>
    </>
  )
}


