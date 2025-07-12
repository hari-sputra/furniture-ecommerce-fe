import { RouteObject } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminProductListSection from "../components/AdminProductListSection/AdminProductListSection";
import AdminOrderListSection from "../components/AdminOrderListSection/AdminOrderListSection";
import AdminCustomerListSection from "../components/AdminCustomerListSection/AdminCustomerListSection";
import AdminSalesReportSection from "../components/AdminReportSection/AdminReportSection";

export const AdminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <AdminDashboard />,
    },
    { path: "products", element: <AdminProductListSection /> },
    { path: "orders", element: <AdminOrderListSection /> },
    { path: "customers", element: <AdminCustomerListSection /> },
    { path: "reports", element: <AdminSalesReportSection /> },
  ],
};
