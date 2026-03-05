import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-[#090909]">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
