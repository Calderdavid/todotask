import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {LoginPage} from '../Auth/LoginPage';
import {Todo} from '../todotask/Todo';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<Todo />} />
        {/* <Route path="/Register" element={<RegisterPage />} /> */}

      </Routes>
    </BrowserRouter>
  )
}
