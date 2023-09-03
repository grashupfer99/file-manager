// core
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
// pages
import HomePage from "pages/Home";
import LinkDetailPage from "pages/Link";
import NotFoundPage from "pages/NotFound";
// components
import ErrorComponent from "components/ErrorComponent";
// api
import { getLinks } from "api";

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      const links = getLinks();
      return defer({ links });
    },
    errorElement: <ErrorComponent />,
    element: <HomePage />,
  },
  {
    path: "link/:linkId",
    element: <LinkDetailPage />,
    errorElement: <ErrorComponent />,
  },
  { path: "404", element: <NotFoundPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
