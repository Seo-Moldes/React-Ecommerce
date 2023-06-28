import { ProductCard } from "../Components/ProductCard"
import { products } from "../assets/Db/Products.db"

export const MainPage = () => {

return(
    <>
    <div>polla</div>
   {products.map((product)=>{
    return(

        <ProductCard id={product.id} name={product.name} 
        img={product.img} price={product.price} />
    )
   })}
    
    </>
)
}



