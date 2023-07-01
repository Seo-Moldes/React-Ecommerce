import { useContext } from "react";
import { Shopcontext } from "../../Context/Shopcontext";
import * as allImages from "../../assets/img/Index"

export const ProductCard = (props: any) => {

  const { id, name, price, img } = props;

  // const shopContext = useContext(Shopcontext);
  //   if (!shopContext){
  //       return null;
  //   }
  //   const { addToCart } = shopContext;


  return (
    <>
      <div className="col col-md-3" id={id}>

        <div className="card shadow-sm">
      <img src={allImages[img as keyof typeof allImages]} alt=""/>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Add to Card</button>
                
              </div>
      <div>{price}</div>

            </div>
          </div>
        </div>
      </div>
     
    </>


  )
}
