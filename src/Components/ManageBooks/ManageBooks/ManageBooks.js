import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import { AiFillDelete } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const ManageBooks = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://secure-mesa-81244.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (products.length === 0) {
    return <Spinner></Spinner>;
  }
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      fetch(`https://secure-mesa-81244.herokuapp.com/books/${id}`, {
        method: "DELETE",
        body: JSON.stringify({}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success("Book Deleted");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container mt-5" style={{ minHeight: "66vh" }}>
      <Link to="/addbook">
        <button className="btn-dark border-0 px-5 py-2">
          <b>
            <MdAdd className="fs-4 me-2"></MdAdd> Add New Book
          </b>
        </button>
      </Link>
      <Table responsive='sm' className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="w-50">
              Name
            </th>
            <th scope="col">Supplier</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="w-50">{product.name}</td>
                <td>{product.supplierName}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.sold}</td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="border-0 btn bg-danger shadow-none"
                >
                  <AiFillDelete className="fs-5"></AiFillDelete> Delete
                </button>
                <Link to={`/inventory/${product._id}`}>
                  <button className="border-0 btn bg-primary shadow-none">
                    Update
                  </button>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageBooks;
