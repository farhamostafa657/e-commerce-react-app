import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import styles from "./category.module.css";
import { data } from "react-router-dom";

function Category() {
  const [categories, setCaregories] = useState([]);
  async function getCategories() {
    try {
      let { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(data);
      setCaregories(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategoryDetailes(category) {
    try {
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log("cliked");
      console.log(data);
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
          <div className="col" key={category}>
            <div className={` ${styles.cards}   card h-100`}>
              <div className="card-body">
                <h5
                  onClick={() => getCategoryDetailes(category)}
                  className="card-title text-capitalize"
                >
                  {category}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
