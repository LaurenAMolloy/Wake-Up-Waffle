import { RouterProvider, createBrowserRouter } from "react-router";
import Root from "@/pages/Root";
import HomePage from "@/pages/home/HomePage";
import DetailsPage from '@/pages/details/DetailsPage'
import CartPage from "@/pages/cart/CartPage";
import MenuPage from "@/pages/menu/MenuPage";
import { menuLoader } from "@/pages/menu/menuLoader";
import detailsLoader from "@/pages/details/detailsLoader";
import { CartProvider } from "@/context/CartProvider";

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
        path: "/details/:id",
        element: <DetailsPage />,
        loader: detailsLoader
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
  return (
      <CartProvider>
         <RouterProvider router={router} />
      </CartProvider>
  )
}

export default App
