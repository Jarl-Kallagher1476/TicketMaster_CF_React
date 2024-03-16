import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "../views/Home/index.jsx";
import Detail from "../views/Detail/index.jsx";
import Error404 from "../views/Error404/index.jsx";
import Profile from "../views/Profile/index.jsx";

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
                element:<div>My Ifno</div>
            }, {
                path:'liked-events',
                element: <div>Liked Events</div>
            }
        ]
    },
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes