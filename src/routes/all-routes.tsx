import DefaultLayout from "@/layout/default/default-layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DASHBOARD_ROUTES } from "./dashboard/dashboard-routes";
import { AUTH_ROUTES } from "./auth/authorization-deppend-routes";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {DASHBOARD_ROUTES}
          {AUTH_ROUTES}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
