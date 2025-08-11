import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import ProdutosPage from "./pages/productPage";
import ProductDetailsPage from './pages/ProductDetailsPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Gallery />} />
          <Route path="produtos/:categoria" element={<ProdutosPage />} />
          <Route path="produto/:id" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;