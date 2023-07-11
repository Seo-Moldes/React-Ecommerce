/*pagina para cuando no hay productos en el carrito*/
/* page for when there are no products in the cart */
import { stopImage } from "../../assets/img/Index"

export const WarningMsg: React.FC = () => {

  return (
    <>
      <div className="stop-page">
        <img className="w-25" src={stopImage} />
        <div className="mb-5 warning-p">Put a product in the cart to continue</div>
      </div>
    </>
  )
}
