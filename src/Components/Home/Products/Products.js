import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homebooks")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // if (products.length === 0) {
  //   return <Spinner></Spinner>;
  // }
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Popular Books</h1>
      {products.length === 0 ? <Spinner></Spinner> : ""}
      <div className="row">
        {products.map((product, index) => {
          return (
            <div
              className="col-lg-4 col-md-6 mx-auto card border-0 g-5"
              style={{
                width: "23rem",
                maxHeight: "52rem",
              }}
            >
              <img
                src={product.image}
                className="h-50 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p>Publisher: {product.supplierName}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <Link to={`/inventory/${product._id}`}>
                <button className="btn btn-primary w-100">Update</button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Link to={`/manageinventory`}>
          <button className="border-0 py-3 px-5 btn-dark my-5">
            <b>Manage Inventory </b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
