import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuthHome = ({ children }) => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export const RequireAuthLogin = ({ children }) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return <Navigate to="/home" replace></Navigate>;
  }
  return children;
};
