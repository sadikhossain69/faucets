import { createBrowserRouter } from "react-router-dom"
import Home from "../layout/Home"
import Login from "../pages/Login/Login"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default routes