import App from '../App'
import Contact from '../pages/Contact'
import Productos from '../pages/Productos'
import Services from '../pages/Services'
export let appRouter = [
    {
        path: '/services',
        element: <Services />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/products",
        element: <Productos />
    },
    {
        path: "/",
        element: <App />
    }
]