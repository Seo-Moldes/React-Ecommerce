/*pagina para cuando no hay productos en el carrito*/
import { stopImage } from "../../assets/img/Index"
export const WarningMsg = () => {

  return (
    <>
      <div className="stop-page">
        <img className="w-25" src={stopImage} />
        <div className="mb-5 warning-p">Put a product in the cart to continue</div>
      </div>
    </>
  )
}
