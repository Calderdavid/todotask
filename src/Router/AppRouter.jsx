import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {LoginPage} from '../Auth/LoginPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/Register" element={<RegisterPage />} /> */}

      </Routes>
    </BrowserRouter>
  )
}
