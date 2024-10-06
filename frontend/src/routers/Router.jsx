import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FinancialRecordsProvider } from "../contexts/financial.context";
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
          <FinancialRecordsProvider> <Dashboard /></FinancialRecordsProvider> },
    ],
  },
]);
export default router
