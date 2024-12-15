import { useAtomValue } from "jotai";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { userAtom } from "@/store/auth";

export const LogoutGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const location = useLocation();

  if (!user) {
    return <Navigate state={{ from: location }} to="/authorization" />;
  }

  return children || <Outlet />;
};
