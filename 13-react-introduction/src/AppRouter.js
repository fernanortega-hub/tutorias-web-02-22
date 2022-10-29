import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Custom404 from "./Components/Custom404";
import Login from "./Components/Login";
import User from "./Components/User";
import Users from "./Components/Users";
import ProtectedRoute from "./Components/ProtectRoute";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Custom404/>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/users',
        element: <ProtectedRoute> <Users/> </ProtectedRoute>,
        children: [
            {
                path: ':id',
                element: <User/>
            }
        ]
    }
])

export default AppRouter;