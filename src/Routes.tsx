import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CVReactNew from "./CV-react-new";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <CVReactNew />
        }],
    { basename: '/cv' }
);

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes;

// return (
//   <BrowserRouter>
//     <Routes basename="/cv-template">
//       <Route path="/" element={<CVReactNew />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/react" element={<CVReact />} />
//       <Route path="/angular" element={<CVAngular />} />
//       <Route path="/react-new" element={<CVReactNew />} />
//     </Routes>
//   </BrowserRouter>
// );