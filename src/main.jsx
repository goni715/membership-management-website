import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "./Pages/TermsConditions/TermsConditions.jsx";
import Notification from "./Pages/Notification/Notification.jsx";
import MyAccount from "./Pages/MyAccount/MyAccount.jsx";
import VideosPage from "./Pages/VideosPage/VideosPage.jsx";
import FilesPage from "./Pages/FilesPage/FilesPage.jsx";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}  >
          <Route index  element={<HomePage/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermsConditions/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/my-profile" element={<MyAccount/>} />
          <Route path="/videos" element={<VideosPage/>} />
          <Route path="/files" element={<FilesPage/>} />
          {/* <Route path="/update-profile" element={<UpdateProfile/>} /> */}
          
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
