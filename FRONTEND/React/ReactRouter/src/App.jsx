import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import ErrorPages from "./pages/ErrorPages";
import GetApiData from "./api/GetApiData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPages/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader:GetApiData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
