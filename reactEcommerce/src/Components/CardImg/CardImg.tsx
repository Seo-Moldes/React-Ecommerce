import { useContext } from "react";
import { CardImgProps } from "../../Types/Types";
import * as imageCard from "../../assets/img/Index"
import { Shop } from "../../Context/Shopcontext";
//
export const CardImg: React.FC<CardImgProps>  = (props) => {

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { card } = shopContext;


    const {img, id} = props;

  return (
    //fuerza el tipado de img para avisar de que es una llave de image card
<>
<img src={imageCard[img as keyof typeof imageCard]} />
<p>{card[id]}</p>
</>
    
  )
}
