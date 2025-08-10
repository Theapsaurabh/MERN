import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import About from "./pages/About";
import { contactData } from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import ErrorPages from "./pages/ErrorPages";
import GetApiData from "./api/GetApiData";
import { MovieDetails } from "./components/layout/ui/MovieDetails";
import { Contact } from "./pages/Contact";


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
          path: "/movie",
          element: <Movie />,
          loader:GetApiData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails/>
        },
         {
      path: "/contact",
    element: <Contact />,
    action: contactData, 
     },
         
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
