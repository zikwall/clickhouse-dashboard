import Signup from "./../screens/signup";
import Login from "./../screens/login";
import Dashboard from './../screens/dashboard';

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/signup",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Signup,
        layout: "/auth"
    },
    {
        path: "/signupss",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Signup,
        layout: "/auth"
    }
];

export routes;