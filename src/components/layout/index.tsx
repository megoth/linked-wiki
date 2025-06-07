import {Outlet} from "react-router-dom";

export default function Layout() {
    return <div className="container">
        <main className="content">
            <Outlet/>
        </main>
    </div>;
}