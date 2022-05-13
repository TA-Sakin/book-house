import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import SignUp from "./Components/Login/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Home/Footer/Footer";
import ManageBooks from "./Components/ManageBooks/ManageBooks/ManageBooks";
import MyBooks from "./Components/ManageBooks/MyBooks/MyBooks";
import AddBook from "./Components/ManageBooks/AddBooks/AddBook";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageBooks></ManageBooks>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="addbook"
          element={
            <RequireAuth>
              <AddBook></AddBook>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="mybooks"
          element={
            <RequireAuth>
              <MyBooks></MyBooks>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
