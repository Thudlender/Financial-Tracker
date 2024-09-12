import { creatBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Dashboard from "../pages/dashboard";

const router = creatBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
        {
            path:"",
            element: <Home />,
        },
        { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);
export default router
