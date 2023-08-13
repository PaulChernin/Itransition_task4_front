import { RouteObject, createBrowserRouter } from 'react-router-dom'
import UsersPage from "../pages/UsersPage/UsersPage"
import MainPage from "../pages/Main/MainPage"
import LoginPage from "../pages/Login/LoginPage"
import SignupPage from "../pages/Signup/SignupPage"

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/signup',
        element: <SignupPage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/users',
        element: <UsersPage/>
    }
]

const router = createBrowserRouter(routes)
export default router