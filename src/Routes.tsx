import { BrowserRouter, Route, Routes } from "react-router-dom";
import CVAngular from "./CV-angular";
import CVReact from "./CV-react";
import Home from "./Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/react" element={<CVReact />} />
        <Route path="/angular" element={<CVAngular />} />
      </Routes>
    </BrowserRouter>
  );
}
