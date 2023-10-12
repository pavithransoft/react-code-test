import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
