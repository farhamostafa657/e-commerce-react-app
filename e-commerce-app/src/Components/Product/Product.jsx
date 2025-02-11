function Product({ product, changePrice }) {
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
            <p className="card-text">{product.price} $</p>

            <div className="d-flex flex-column w-100 justify-content-center align-items-center">
              <button
                className="w-100 btn btn-dark mb-2"
                onClick={() => changePrice(product.id)}
              >
                Update Price
              </button>
              <button className="w-100 btn btn-dark">Delete item</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
