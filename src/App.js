import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import SignUp from "./Components/Login/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/books/:id"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}
// 427gsnXrMwkm9uwr
export default App;
