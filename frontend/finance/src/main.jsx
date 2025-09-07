import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Login from "./pages/Auth/login";
import Home from "./pages/Dashboard/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="446990758134-k20ib7n3v9auos9t4qhru55j0nnc7k7i.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
