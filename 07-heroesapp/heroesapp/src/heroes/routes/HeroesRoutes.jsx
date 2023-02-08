import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../../ui";
import { SearchPage, 
    DCPage, 
    MarvelPage, 
    Hero 
} from "../pages";

export const childHeroesRoutes = [
    {
        path: "/marvel",
        element: <MarvelPage/>,
    },
    {
        path: "/dc",
        element: <DCPage/>,
    },
    {
        path: "/search",
        element: <SearchPage/>,
    },
    {
        path: "/hero/:id",
        element: <Hero/>,
    },
    {
        path: "/*",
        element: <Navigate to={"/marvel"}/>,
    },
]

export const HeroesRoutes = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
            <Outlet/>
        </div>
        </>
    )
}