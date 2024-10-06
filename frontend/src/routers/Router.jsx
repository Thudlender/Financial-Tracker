import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FinancialRecordProvider } from "../contexts/financial.context";
import Home from "../pages/Home";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path:"",
            element: <Home />,
        },
        { path: "dashboard", element:
          <FinancialRecordProvider> <Dashboard /></FinancialRecordProvider> },
    ],
  },
]);
export default router
