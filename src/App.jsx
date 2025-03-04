import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
