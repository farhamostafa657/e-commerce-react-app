function Product({ product }) {
  return (
    <>
      <div className="col ">
        <div className="card h-100 shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src={product.image}
            className="card-img-top w-100 h-75 rounded"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
