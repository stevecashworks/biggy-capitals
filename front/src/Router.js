import Home from './pages/Home/home';
import Admin from './pages/admin/admin';
import About from './pages/about/about';
import Tc from './pages/TC/TC';
import Contact from './pages/contact/contact';
import Register from './pages/User/Register';
import Login from './pages/User/login';
import Dash from './pages/User/dashboard';
import {createBrowserRouter} from 'react-router-dom'
const router= createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/terms',
        element:<Tc />
    },
    {
        path:'/user/dashboard',
        element:<Dash/>
    },
    {
        path:'/user/register',
        element:<Register />
    },
    {
        path:'/user/login',
        element:<Login />
    },
    {
        path:'/contact',
        element:<Contact />
    },

    {
        path:'/admin',
        element:<Admin />

    }
])
export default router

