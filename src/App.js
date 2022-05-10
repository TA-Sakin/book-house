import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import SignUp from "./Components/Login/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}
// 427gsnXrMwkm9uwr
export default App;
