// core
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import HomePage from "pages/Home";
import LinkDetailPage from "pages/Link";
import NotFoundPage from "pages/NotFound";
// components

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "link/:linkId",
    element: <LinkDetailPage />,
  },
  { path: "404", element: <NotFoundPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
