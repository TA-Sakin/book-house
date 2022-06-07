import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import { AiFillDelete } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getBooks = async () => {
      const email = user.email;
      try {
        const { data } = await axios.get(
          `https://secure-mesa-81244.herokuapp.com/mybooks?email=${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setBooks(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          navigate("/login");
          signOut(auth);
        }
      }
    };
    getBooks();
  });
  // if (books.length === 0) {
  //   return <Spinner></Spinner>;
  // }
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

          const remaining = books.filter((book) => book._id !== id);
          setBooks(remaining);
        });
    }
  };
  return (
    <div className="container mt-5" style={{ minHeight: "66vh" }}>
      <h3 className="text-center mt-5 mb-3">You have added {books.length} books.</h3>
      <Link to="/addbook">
        <button className="btn-dark border-0 px-5 py-2">
          <b>
            <MdAdd className="fs-4 me-2"></MdAdd> Add New Book
          </b>
        </button>
      </Link>
      <table className="table table-hover">
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
          {books.map((book, index) => {
            return (
              <>
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="w-50">{book.name}</td>
                <td>{book.supplierName}</td>
                <td>${book.price}</td>
                <td>{book.quantity}</td>
                <td>{book.sold}</td>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="border-0 btn bg-danger my-1 shadow-none"
                >
                  <AiFillDelete className="fs-5"></AiFillDelete> Delete
                </button>
                <Link to={`/inventory/${book._id}`}>
                  <button className="border-0 btn bg-info shadow-none">
                    Update
                  </button>
                </Link>
              </tr>
                </>
            );
          })}
        </tbody>
      </table>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyBooks;
