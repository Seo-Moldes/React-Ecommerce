
export const ProductCard = (props: any) => {

  const { id, name, price, img } = props;

  return (
    <>
      <div className="col ">

        <div className="card shadow-sm">
      <img src={img} alt=""/>
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a
             natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                
              </div>
      <div>{price}</div>

            </div>
          </div>
        </div>
      </div>
     
    </>


  )
}
