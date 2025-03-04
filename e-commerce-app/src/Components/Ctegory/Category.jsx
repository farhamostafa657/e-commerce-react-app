import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import styles from "./category.module.css";

function Category() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  async function getCategories() {
    try {
      let { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(data);
      setCategories(data); // Corrected variable name
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategoryDetails(category) {
    console.log("Category clicked:", category);
    try {
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log("clicked");
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map((category) => (
          <div
            className="col"
            key={category}
            onClick={() => getCategoryDetails(category)}
          >
            <div className={` ${styles.cards} card h-100`}>
              <div className="card-body">
                <h5
                  // Fixed function name
                  className="card-title text-capitalize"
                  style={{ cursor: "pointer" }}
                >
                  {category}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products && (
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <div className="col">
                <div className="card h-100  bg-body-tertiary rounded  ">
                  <img
                    src={product.image}
                    className="card-img-top w-100 h-50 rounded"
                    alt={product.title}
                  />
                  <div className="card-body d-flex flex-column justify-content-around ">
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

                    <div className="d-flex flex-column w-100 justify-content-center align-items-center ">
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
