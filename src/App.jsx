import Homee from "./pages/Homee"
import 'flowbite'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Pages from "./pages/Pages"
import ShopList from "./components/ShopList"
import ProductDetails from "./pages/ProductDetails"
import ShoppingCart from "./pages/ShoppingCart"
import OrderComplete from "./pages/OrderComplete"
import HektoDemoPage from "./pages/HektoDemoPage"
import MyAccount from "./pages/MyAccount"
import Blog from "./pages/Blog"
import SingleBlog from "./pages/SingleBlog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Faq from "./pages/Faq"
import Registration from "./components/Registration"

function App() {
  let router = createBrowserRouter(createRoutesFromElements(

  < Route  element={<RootLayout/>}>
    <Route index element={<Homee/>}></Route>
    <Route path="/pages" element={<Pages/>}></Route>
    <Route path="/shop-list" element={<ShopList/>}></Route>
    <Route path="/product-details" element={<ProductDetails/>}></Route>
    <Route path="/product-details/:id" element={<ProductDetails/>}></Route>
    <Route path="/shopping-cart" element={<ShoppingCart/>}></Route>
    <Route path="/order-complete" element={<OrderComplete/>}></Route>
    <Route path="/checkout" element={<HektoDemoPage/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/single-blog" element={<SingleBlog/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/registration" element={<Registration/>}></Route>
    <Route path="/*" element={<Error/>}></Route>
  </Route>

  ))
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  )
}

export default App
