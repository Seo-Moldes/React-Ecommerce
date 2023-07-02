import { Shopcontext } from './Context/Shopcontext';
import { Router } from './Routes/Router.routes';

export function App() {
  
  return (
    <>
   <Shopcontext>
   <Router/>
   </Shopcontext>
    </>
  )
}


