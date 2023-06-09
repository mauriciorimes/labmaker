import styles from "./Menu.module.css";
import MenuLink from './MenuLink';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className={styles.Menu}>
            <Link to="/" className={styles.Logo}>
                <h2> LabMaker </h2>
            </Link>

            <section>
                <MenuLink rota="/">
                    <ul>
                        <li> <HomeIcon /> </li>
                        <li> Início </li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/agendamento">
                    <ul>
                        <li> <CalendarMonthIcon /> </li>
                        <li> Agendar </li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/equipamentos">
                    <ul>
                        <li> <PrecisionManufacturingIcon /> </li>
                        <li> Equipamentos </li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/galeria-de-fotos">
                    <ul>
                        <li> <CameraAltIcon /> </li>
                        <li> Galeria de Fotos </li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/praticas-pedagogicas">
                    <ul>
                        <li> <LocalLibraryIcon /> </li>
                        <li> Práticas Pedagógicas </li>
                    </ul>
                </MenuLink>
            </section>
        </nav>

    )
}