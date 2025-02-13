import { useEffect, useState } from "react";
import Product from "../Product/Product";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import Search from "../Search/Search";
import axios from "axios";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
    image: product1,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    category: "Electronics",
    inStock: true,
    image: product2,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 150,
    category: "Accessories",
    inStock: false,
    image: product3,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 100,
    category: "Home Appliances",
    inStock: true,
    image: product4,
  },
  {
    id: 5,
    name: "Gaming Chair",
    price: 250,
    category: "Furniture",
    inStock: false,
    image: product5,
  },
];

function Home() {
  const [productList, setProductList] = useState([]);

  function deleteItem(id) {
    let products = structuredClone(productList);
    let newProducts = products.filter((product) => product.id != id);
    setProductList(newProducts);
  }

  function changePrice(id) {
    let products = structuredClone(productList);
    let item = products.find((product) => product.id === id);
    item.price += 10;
    setProductList(products);
  }

  function searchProduct(value) {
    let newProducts = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProductList(newProducts);
  }

  // npm i axios   to speak with apis

  async function getProducts() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Search searchProduct={searchProduct} />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productList.map((product) => (
            <Product
              product={product}
              key={product.id}
              onChangePrice={changePrice}
              onDeleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
