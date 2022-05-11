import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import { AiFillDelete } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
const ManageBooks = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container mt-5">
      <Link to="/addbook">
        <button className="btn-dark border-0 px-5 py-2">
          <b>
            <MdAdd className="fs-4 me-2"></MdAdd> Add New Book
          </b>
        </button>
      </Link>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="w-50">
              Name
            </th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td className="w-50">{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.sold}</td>
                <button className="border-0 btn bg-danger">
                  <AiFillDelete className="fs-5"></AiFillDelete> Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
