import { products } from '../assets/Db/Products.db';


export const ProductCard = (props:any) => {

    const {id, name, price, img } = props;

  return (
<>

<div>{price}</div>
<img src={img} alt="" />
<button>Purchase</button>

</>
    
    
  )
}
