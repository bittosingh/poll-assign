import React from "react";
import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      {/* <Route path="/" element={<Navigate to="/login/email" />} /> */}
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App