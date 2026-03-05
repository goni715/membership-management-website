import { Outlet, useLocation } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

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
