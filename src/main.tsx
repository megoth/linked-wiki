import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "bulma/css/bulma.min.css"
import Layout from "./components/layout";
import IndexPage from "../entries/index.mdx"
import AboutPage from "../entries/about.mdx"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <IndexPage/>,
            },
            {
                path: "/about",
                element: <AboutPage/>,
            },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
