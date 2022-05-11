import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
              <p className="card-text">{book.supplier}</p>
              <p className="card-text">{book.price}</p>
              <p className="card-text">{book.quantiy}</p>
              <button className="btn btn-primary">Delivered</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
