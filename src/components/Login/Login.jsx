import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (login === true) {
    navigate("/conta");
  }

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
      <Route path="resetar" element={<LoginPasswordReset />} />
    </Routes>
  );
};

export default Login;
