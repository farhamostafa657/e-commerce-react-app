function Product({ product, onChangePrice, onDeleteItem }) {
  return (
    <>
      <div className="col">
        <div className="card h-75 shadow bg-body-tertiary rounded  ">
          <img
            src={product.image}
            className="card-img-top w-100 h-50 rounded"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">
              {product.title.split(" ").splice(0, 2).join(" ")}
            </h5>
            <div className="d-flex justify-content-between h-25 align-items-center">
              <p className="card-text">{product.price} $</p>
              <p className="card-text">
                <i className="fa fa-star text-warning"></i>
                {product.rating.rate}
              </p>
            </div>

            <div className="d-flex flex-column w-100 justify-content-center align-items-center">
              <button
                className="w-100 btn btn-dark mb-2"
                onClick={() => onChangePrice(product.id)}
              >
                Update Price
              </button>
              <button
                className="w-100 btn btn-dark"
                onClick={() => onDeleteItem(product.id)}
              >
                Delete item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
