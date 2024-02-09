import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@pages/LoginPage.tsx";

export const PATH = {
  LOGIN: "/login",
};

const router = createBrowserRouter([
  { path: PATH.LOGIN, element: <LoginPage /> },
]);

export default router;
