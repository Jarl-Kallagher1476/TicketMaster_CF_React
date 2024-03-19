import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "../views/Home/index.jsx";
import Detail from "../views/Detail/index.jsx";
import Error404 from "../views/Error404/index.jsx";

import Profile from "../views/Profile/index.jsx";
import LikedEvents from "../views/Profile/components/LikedEvents/index.jsx";
import MyInfo from "../views/Profile/components/MyInfo/index.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/detail/:eventId',
        element: <Detail/>
    },
    {
        path: '/profile',
        element: <Profile/>,
        children: [
            {
                path: 'my-info',
                element:<MyInfo/>
            }, {
                path:'liked-events',
                element: <LikedEvents/>
            }
        ]
    },
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes