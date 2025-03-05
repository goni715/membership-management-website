import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="min-h-[78vh] bg-[#090909]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;


