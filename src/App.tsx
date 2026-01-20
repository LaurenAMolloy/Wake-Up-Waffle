import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import AboutPage from './pages/about/AboutPage';
import CartPage from "./pages/cart/CartPage";
import MenuPage from "./pages/menu/MenuPage";

//SET UP BROWSER ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
