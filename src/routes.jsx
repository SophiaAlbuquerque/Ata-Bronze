import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Gallery from "./pages/gallery";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Gallery />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;