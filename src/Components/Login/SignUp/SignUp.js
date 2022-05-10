import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { Form } from "react-bootstrap";

const SignUp = () => {
  //   const [createUserWithEmailAndPassword, user, loading, error] =
  //     useCreateUserWithEmailAndPassword(auth);
  const [changeNameBorderColor, handleNameBorderColor] = useState(false);
  const [changeEmailBorderColor, handleEmailBorderColor] = useState(false);
  const [changePassBorderColor, handlePassBorderColor] = useState(false);
  const [changeConfPassBorderColor, handleConfPassBorderColor] =
    useState(false);
  const [agree, setAgree] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleName = (e) => {
    const verifyName = /^[a-z ,.'-]+$/i.test(e.target.value);
    if (verifyName) {
      handleNameBorderColor(false);
      setInfo({ ...info, name: e.target.value });
      setError({ ...errors, name: "" });
    } else {
      handleNameBorderColor(true);
      setError({ ...errors, name: "Enter a valid name" });
      setInfo({ ...info, name: "" });
    }
  };
  const handleEmail = (e) => {
    const verifyEmail = /\S+@\S+\.\S+/.test(e.target.value);
    if (verifyEmail) {
      handleEmailBorderColor(false);

      setInfo({ ...info, email: e.target.value });
      setError({ ...errors, email: "" });
    } else {
      handleEmailBorderColor(true);

      setError({ ...errors, email: "Invalid email" });
      setInfo({ ...info, email: "" });
    }
  };
  const handlePassword = (e) => {
    const verifyPassword = /(?=.*?[#?!@$%^&*-]).{6,}/.test(e.target.value);
    const passLength = /.{6,}/.test(e.target.value);
    if (verifyPassword) {
      handlePassBorderColor(false);

      setInfo({ ...info, password: e.target.value });
      setError({ ...errors, password: "" });
    } else {
      if (!passLength) {
        handlePassBorderColor(true);

        setError({
          ...errors,
          password: "Minimum 6 characters",
        });
        setInfo({ ...info, password: "" });
      } else {
        handlePassBorderColor(true);

        setError({
          ...errors,
          password: "Minimum 1 special character",
        });
        setInfo({ ...info, password: "" });
      }
    }
  };
  const handleConfirmPass = (e) => {
    if (e.target.value === info.password) {
      handleConfPassBorderColor(false);
      setInfo({ ...info, confirmPassword: e.target.value });
      setError({ ...errors, confirmPassword: "" });
    } else {
      handleConfPassBorderColor(true);
      setError({ ...errors, confirmPassword: "Password doesn't match" });
      setInfo({ ...info, confirmPassword: "" });
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="">
      <div className="mx-auto col-sm-6 col-lg-4 px-5 mt-5">
        <h3 className="text-center my-3">Sign Up</h3>
        <form className="">
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Name</label>

            <input
              onChange={handleName}
              type="name"
              name="name"
              style={Object.assign(
                {},
                {
                  borderColor: changeNameBorderColor ? "red" : "",
                  borderWidth: changeNameBorderColor ? "2px" : "1px",
                }
              )}
              className="form-control shadow-none"
              id="exampleInputEmail1"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />
            {errors?.name && (
              <p className="text-danger ">
                <AiOutlineExclamationCircle className="me-1" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={handleEmail}
              name="email"
              type="email"
              className="form-control shadow-none"
              style={Object.assign(
                {},
                {
                  borderColor: changeEmailBorderColor ? "red" : "",
                  borderWidth: changeEmailBorderColor ? "2px" : "1px",
                }
              )}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {errors?.email && (
              <p className="text-danger ">
                <AiOutlineExclamationCircle className="me-1" />
                {errors.email}
              </p>
            )}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={handlePassword}
              name="password"
              type="password"
              style={Object.assign(
                {},
                {
                  borderColor: changePassBorderColor ? "red" : "",
                  borderWidth: changePassBorderColor ? "2px" : "1px",
                }
              )}
              className="form-control shadow-none"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            {errors?.password && (
              <p className="text-danger ">
                <AiOutlineExclamationCircle className="me-1" />
                {errors.password}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm password</label>
            <input
              //   disabled={!info?.password}
              onChange={handleConfirmPass}
              name="confirmPassword"
              type="confirmPassword"
              style={Object.assign(
                {},
                {
                  borderColor: changeConfPassBorderColor ? "red" : "",
                  borderWidth: changeConfPassBorderColor ? "2px" : "1px",
                }
              )}
              className="form-control shadow-none"
              id="exampleInputPassword1"
              placeholder="Confirm password"
            />
          </div>
          {errors?.confirmPassword && (
            <p className="text-danger ">
              <AiOutlineExclamationCircle className="me-1" />
              {errors.confirmPassword}
            </p>
          )}
          <Form.Group className="mt-4 mb-2" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setAgree(!agree)}
              className={agree ? "text-primary" : "text-danger"}
              type="checkbox"
              label="Agree terms and conditions"
            />
          </Form.Group>

          <button
            disabled={!agree}
            onSubmit={handleSignUp}
            type="submit"
            className="btn btn-primary rounded-pill w-100"
          >
            Sign Up
          </button>
          <div className="mt-2">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div
              style={{
                display: "inline",
                width: "50%",
                borderBottom: "1px solid gray",
              }}
            ></div>
            <span className="px-2 pb-1">or</span>
            <div
              style={{
                display: "inline",
                width: "50%",
                borderBottom: "1px solid gray",
              }}
            ></div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark rounded-pill w-100 mt-3"
          >
            <FcGoogle className="fs-5 "></FcGoogle> <b>Continue with Google</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
