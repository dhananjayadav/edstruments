import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import { UnAuthenticatedRoute } from "./components/unAuthenticatedRoute/UnAuthenticatedRoute";
import { CreateInvoice } from "./pages/createInvoice/CreateInvoice";
import { Login } from "./pages/login/Login";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";
import { ROUTES } from "./utils/constants/routes";

export const router = createBrowserRouter([
  {
    element: <UnAuthenticatedRoute />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
        index: true,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTES.CREATE_INVOICE,
        element: <CreateInvoice />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
