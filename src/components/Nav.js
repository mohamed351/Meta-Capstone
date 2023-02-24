import styles from "./Nav.module.css";
export default function Nav(){
    return(<nav className={styles.nav_bar}>
             <ul>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/">Menu</a>
                </li>
                <li>
                <a href="/Reserve-table">Reserve a Table</a>
                </li>
            </ul>
        </nav>)
}