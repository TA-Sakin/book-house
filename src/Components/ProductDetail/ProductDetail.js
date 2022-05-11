import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (book.length === 0) {
    return <Spinner></Spinner>;
  }
  const handleDelivered = () => {
    let quantity = book.quantity;
    quantity = quantity + 1;
    const updateQuantity = { quantity };

    fetch(`http://localhost:5000/books/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setBook({ ...book, quantity: quantity });
        toast("One more book added");
      });
  };
  return (
    <div className="container mt-5" style={{ minHeight: "66vh" }}>
      <div className="card mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={book.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <p className="card-text">{book.description}</p>
              <p className="card-text">Supplier: {book.supplier}</p>
              <p className="card-text">Price: ${book.price}</p>
              <p className="card-text">Quantity: {book.quantity}</p>
              <button className="btn btn-primary" onClick={handleDelivered}>
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetail;
