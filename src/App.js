import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}
// 427gsnXrMwkm9uwr
export default App;
