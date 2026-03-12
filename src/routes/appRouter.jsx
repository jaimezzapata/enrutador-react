import App from "../App"
import Contact from "../pages/Contact"
import Productos from "../pages/Productos"
import Services from "../pages/Services"
export let Router = [
    { 
        path: "/contact",
        Element: <Contact />
    },
    {
        path: "/products",
        Element: <Productos/>
    },
    {
        path:"/services",
        element: <Services/>
    },
    {
        path: "/",
        element: < App/>
    }
]