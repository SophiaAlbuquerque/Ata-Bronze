import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Gallery from "./pages/gallery";

function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/produtos" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;