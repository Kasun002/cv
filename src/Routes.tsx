import { BrowserRouter, Route, Routes } from "react-router-dom";
import CVAngular from "./CV-angular";
import CVReact from "./CV-react";
import Home from "./Home";
import CVReactNew from "./CV-react-new";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CVReactNew />} />
        <Route path="/home" element={<Home />} />
        <Route path="/react" element={<CVReact />} />
        <Route path="/angular" element={<CVAngular />} />
        <Route path="/react-new" element={<CVReactNew />} />
      </Routes>
    </BrowserRouter>
  );
}
