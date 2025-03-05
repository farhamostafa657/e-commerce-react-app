import { Link } from "react-router-dom";

function Product({ product, onChangePrice, onDeleteItem }) {
  return (
    <div className="col">
      <div className="card h-100 bg-body-tertiary rounded d-flex justify-content-between align-items-center">
        <Link
          to={`/product-details/${product.id}`}
          className="text-decoration-none d-block"
        >
          <img
            src={product.image}
            className="card-img-top w-100  rounded"
            alt={product.title}
          />
          <div className="card-body d-flex flex-column justify-content-around">
            <h5 className="card-title">
              {product.title.split(" ").splice(0, 2).join(" ")}
            </h5>

            <div className="d-flex justify-content-between  align-items-center">
              <p className="card-text">{product.price} $</p>
              <p className="card-text">
                <i className="fa fa-star text-warning"></i>{" "}
                {product.rating.rate}
              </p>
            </div>
          </div>
        </Link>

        {/* Buttons should be outside the Link */}
        <div className="d-flex flex-column w-100 justify-content-center align-items-center p-2">
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
  );
}

export default Product;
