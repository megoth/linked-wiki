import {Outlet} from "react-router-dom";
import Navigation from "../navigation";
import {clsx} from "clsx";
import styles from "./style.module.css";

export default function Layout() {
    return (
        <div className={clsx("container", styles.container)}>
            <header>
                <Navigation/>
            </header>
            <main className="content">
                <Outlet/>
            </main>
        </div>
    );
}