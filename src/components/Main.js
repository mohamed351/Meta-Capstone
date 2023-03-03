import { Routes , Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import MenuPage from "../pages/MenuPage";
import ReservationComplete from "../pages/ReservationComplete";

export default function Main(){
    return (<main>
        <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/booking" element={<BookPage />}  />
            <Route path="/menu" element={<MenuPage />}  />
            <Route path="/completed" element={<ReservationComplete />}  />
        </Routes>
    </main>)
}