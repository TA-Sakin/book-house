import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getBooks = async () => {
      const email = user.email;
      try {
        const { data } = await axios.get(
          `http://localhost:5000/mybooks?email=${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setBooks(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          navigate("/login");
          signOut(auth);
        }
      }
    };
    getBooks();
  });
  return (
    <div>
      <h3>My book {books.length}</h3>
    </div>
  );
};

export default MyBooks;
