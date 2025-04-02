import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassowrd from "./pages/ForgotPassowrd";
import OtpLogin from "./pages/OtpLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/otp-verification" element={<OtpLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassowrd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
