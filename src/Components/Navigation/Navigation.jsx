import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return(
        <nav className={s.navMenu}>
            <Link className={s.menuItem} to="/generator">Генерировать QR код</Link>
            <Link className={s.menuItem} to ="/scan">Сканировать QR код</Link>
            <Link className={s.menuItem} to ="/GenerateHistory">История генерирования</Link>
            <Link className={s.menuItem} to ="/ScanHistory">История сканирования</Link>
        </nav>
    )
};