import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/header/header";
import Cart from "./pages/cart";
import Home from "./pages/home";


function App() {
  return (
    <div>
        <Header/>
       <Routes>
        <Route Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>

       </Routes>

      
    </div>
  );
}

export default App;
