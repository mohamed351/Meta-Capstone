import styles from "./Nav.module.css";
import {NavLink} from "react-router-dom";
export default function Nav(){
    return(<nav className={styles.nav_bar}>
             <ul>
                <li>
                 <NavLink to="/" >
                    Home
                 </NavLink>
                </li>
                <li>
                <NavLink to="/menu">
                <a href="/">Menu</a>
                </NavLink>
                </li>
                <li>
                    <NavLink to="/booking">
                    Reserve a Table
                </NavLink>
                </li>
            </ul>
        </nav>)
}