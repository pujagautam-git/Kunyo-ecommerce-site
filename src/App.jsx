import {Route, Routes} from "react-router";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import GamingLaptop from "./Pages/Gaminglaptop/GamingLaptop.jsx";
import OfficeLaptop from "./Pages/OfficeLaptop/OfficeLaptop.jsx";
import Monitor from "./Pages/Monitor/Monitor.jsx";

const App =() => {
  return(
    <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="gaming-laptop" element={<GamingLaptop/>} />
          <Route path="office-laptop" element={<OfficeLaptop/>} />
          <Route path="monitor" element={<Monitor/>} />
      </Routes>
      <Footer/>
    </div>
  )}
  export default App;
