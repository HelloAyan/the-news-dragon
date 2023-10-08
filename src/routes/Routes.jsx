import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
    Routes,
    useLoaderData,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/0'}></Navigate>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-helloayan-ayan-ahmed-rabbis-projects.vercel.app/categories/${params.id}`),
            }

        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><News></News> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-helloayan-ayan-ahmed-rabbis-projects.vercel.app/news/${params.id}`)
            }
        ]
    }

]);

export default router;