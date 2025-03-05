import axios from "axios";
import { use, useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import Looder from "../Looder/looder";

function ProductDetails() {
  let { id } = useParams();

  const [details, setDetails] = useState(null);
  async function getProductDetails() {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    setDetails(data);
  }

  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div className="row">
      {details ? (
        <>
          {" "}
          <div className="col-md-4">
            <img src={details.image} className="w-100" alt="" />
          </div>
          <div className="col-md-8 text-white">
            <h1>{details.title}</h1>
            <p>{details.description}</p>
            <span>{details.category}</span>
            <div className="d-flex justify-content-between  align-items-center">
              <p className="card-text">{details.price} $</p>
              <p className="card-text">
                <i className="fa fa-star text-warning"></i>{" "}
                {details.rating.rate}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Looder />
      )}
    </div>
  );
}

export default ProductDetails;
