import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import AboutPage from './pages/about/AboutPage';
import CartPage from "./pages/cart/CartPage";
import MenuPage from "./pages/menu/MenuPage";
import { menuLoader } from "./pages/menu/menuLoader";

//SET UP BROWSER ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <div>Loading...</div>,
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
      },
      {
        path: "/menu",
        element: <MenuPage />,
        loader: menuLoader
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
