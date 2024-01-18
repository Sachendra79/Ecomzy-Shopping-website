import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
const App = () => {
  return (
    <div className="">
      <div >
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
