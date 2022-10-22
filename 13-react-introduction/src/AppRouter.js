import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Custom404 from "./Components/Custom404";
import Login from "./Components/Login";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Custom404/>
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default AppRouter;