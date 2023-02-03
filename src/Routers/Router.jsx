import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../Compontes/AddStudent/AddStudent";
import Login from "../Compontes/Login/Login";
import ManageStudent from "../Compontes/ManageStudent/ManageStudent";
import Register from "../Compontes/Register/Register";
import Main from "../Layout/Main";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addstudent',
                element: <PrivetRoute><AddStudent></AddStudent></PrivetRoute>
            },
            {
                path: '/managestudent',
                element: <PrivetRoute><ManageStudent></ManageStudent></PrivetRoute>
            }
        ],
    }
]);