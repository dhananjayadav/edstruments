import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import { ENVIRONMENT } from "../../utils/constants/environment";

export const UnAuthenticatedRoute = () => {
  if (localStorage.getItem(ENVIRONMENT.LOGGED_IN_TOKEN_KEY)) {
    return <Navigate to={ROUTES.CREATE_INVOICE} replace />;
  }

  return <Outlet />;
};
