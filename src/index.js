import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.js';
import RecoverPassword from './RecoverPassword.js';
import InicioSesion from "./InicioSesion.js"
import Registration from './Registration.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateQ from './CreateQ.js';
import { AnswerQuestionnaire } from './components/AnwerQuestionnaire.js';
import "bootstrap-icons/font/bootstrap-icons.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/inicio_sesion",
    element: <InicioSesion/>,
  },
  {
    path: "/recover_password",
    element: <RecoverPassword/>,
  },
  {
    path: "/sing_in",
    element: <Registration/>,
  },
  {
    path: "/createq",
    element: <CreateQ/>,
  },
  {
    path: "/AnswerQuestionnaire",
    element: <AnswerQuestionnaire/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
