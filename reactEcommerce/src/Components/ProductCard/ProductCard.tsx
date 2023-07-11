import { useContext } from "react";
import { Shop } from "../../Context/Shopcontext";
import * as allImages from "../../assets/img/Index"
import { productProps } from '../../Types/Types';
/*pasa los productos al carrito*/
/* put the products in the cart */
export const ProductCard :React.FC<productProps> = (props) => {

  const { id, price, img } = props;

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { addToCard } = shopContext;

  /*muestra las imagenes de los productos y los botones para pasar al carrito*/
  /*show the images of the products and the buttons to go to the cart*/
  return (
    <>
     <div className="col card-game" id={id.toString()}>


        <div className="card shadow-sm">
          <img src={allImages[img as keyof typeof allImages]} alt="" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center g-2">
              <div className="btn-group">
                <button onClick={() => { addToCard(id) }} type="button" className="btn btn-sm button-add">Add to Cart</button>
              </div>
              <div className="div-price">{`${price} $`}</div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

