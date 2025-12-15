import {Route, Routes} from "react-router";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";

const App =() => {
  return(
    <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )}
  export default App;