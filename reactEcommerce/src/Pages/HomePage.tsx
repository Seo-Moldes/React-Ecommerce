import { ProductCard } from "../Components/ProductCard/ProductCard"
import { products } from "../assets/Db/Products.db"

export const HomePage = () => {

console.log(products);
return(
    <>
   
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
   {products.map((product)=>{

    return(

        <ProductCard id={product.id} name={product.name} 
        img={product.img} price={product.price} key={product.id} />
    )
   })}
     </div> 
    
    </>
)
}


