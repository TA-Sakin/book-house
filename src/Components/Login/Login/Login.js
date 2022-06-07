import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,useAuthState
} from "react-firebase-hooks/auth";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import auth from "../../../Firebase/firebase.init";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [changeEmailBorderColor, handleEmailBorderColor] = useState(false);
  const [changePassBorderColor, handlePassBorderColor] = useState(false);
  const [signInWithEmailAndPassword, signInUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
  const handleGoogleSignIn = () => {
     signInWithGoogle();
};

  const handleResetPassword = async () => {
    if (info.email && !passwordError) {
      await sendPasswordResetEmail(info.email);
      toast("Sending email");
    } else if (passwordError === undefined || passwordError) {
      toast.error(
        passwordError === undefined
          ? "Missing email"
          : `${(passwordError?.code).slice(5)}`
      );
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(info.email, info.password);
  };
  if(user){
    const getToken = async ()=>{
      const { data } = await axios.post("https://secure-mesa-81244.herokuapp.com/login", {
        email: user.email,
    });
    if(data){
      localStorage.setItem("accessToken", data.accessToken);
      navigate(from, { replace: true });
    }
  }
  getToken()
  }
  useEffect(() => {
    if (error) {
      switch (error?.code) {
        case "auth/user-not-found":
          setError(errors => ({
            ...errors,
            email: "Email not registered",
          }));
          setInfo(info => ({ ...info, email: "" }));
          break;
        case "auth/wrong-password":
          setError(errors => ({ ...errors, password: "Wrong password" }));
          setInfo(info => ({ ...info, email: "" }));
          break;
        default:
          toast.error("Something went wrong");
          break;
      }
    }
  }, [error]);
  
  return (
    <div style={{ minHeight: "62vh" }}>
      <div className="mx-auto col-sm-6 col-lg-4 px-5 mt-5">
        <h3 className="text-center my-3">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              onChange={handleEmail}
              style={Object.assign(
                {},
                {
                  borderColor: changeEmailBorderColor ? "red" : "",
                  borderWidth: changeEmailBorderColor ? "2px" : "1px",
                }
              )}
              className="form-control shadow-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
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
              type="password"
              style={Object.assign(
                {},
                {
                  borderColor: changePassBorderColor ? "red" : "",
                  borderWidth: changePassBorderColor ? "2px" : "1px",
                }
              )}
              onChange={handlePassword}
              className="form-control shadow-none"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
            {errors?.password && (
              <p className="text-danger ">
                <AiOutlineExclamationCircle className="me-1" />
                {errors.password}
              </p>
            )}
          </div>
          <span onClick={handleResetPassword}>
            <b className="forgotPass">Forgot your password?</b>
          </span>
          <div className="mt-4">
            <p>
              Don't have an account
              <Link to="/signup"> Sign Up</Link>
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary rounded-pill w-100"
          >
            <b>Login</b>
          </button>

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
        </form>
        <button
          type="submit"
          className="btn btn-outline-dark rounded-pill w-100 mt-3"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="fs-5 "></FcGoogle> <b>Continue with Google</b>
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
