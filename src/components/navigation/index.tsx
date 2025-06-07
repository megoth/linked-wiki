import {NavLink} from "react-router-dom";
import {clsx} from "clsx";
import styles from "./styles.module.css";

export default function Navigation() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className={clsx("container", styles.container)}>
                <div className="navbar-brand">
                    <NavLink to="/" className={clsx("navbar-item", styles.homeLink)}>
                        <img src="/rdf.png" alt={"Logo for rdf.js.org"}/>
                        <span>Home</span>
                    </NavLink>
                </div>
                <div className={styles.navbarDivider}/>
            </div>
        </nav>
    )
}