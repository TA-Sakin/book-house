import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Popular Books</h1>
      <div className="row">
        {products.map((product) => {
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
                <p>Publisher: {product.supplier}</p>
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
          <button className="border-0 py-2 px-5 btn-success my-5">
            Manage Inventory
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
