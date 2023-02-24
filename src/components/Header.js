import Nav from "./Nav";
import style from "./Header.module.css";
export default function Header(){
    return (<header className={style.header}>
        <img src="/assets/logo.png" alt="logo" width="250px"  />
        <Nav></Nav>
        
    </header>)
}
