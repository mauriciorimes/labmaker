import styles from './Menu.module.css';
import MenuLink from './MenuLink';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PrintIcon from '@mui/icons-material/Print';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


export default function Menu() {
    return (
        <nav className={styles.Menu}>
            <h2 className={styles.labmaker}> LabMaker </h2>
            <section>
                <MenuLink rota="/">
                    <ul>
                        <li><HomeIcon /></li>
                        <li>Início</li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/agendamento">
                    <ul>
                        <li><CalendarMonthIcon /></li>
                        <li>Agendar</li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/equipamentos">
                    <ul>
                        <li><PrintIcon /></li>
                        <li>Equipamentos</li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/galeria">
                    <ul>
                        <li><CameraAltIcon /></li>
                        <li>Galeria de Fotos</li>
                    </ul>
                </MenuLink>
                <MenuLink rota="/praticas">
                    <ul>
                        <li><LocalLibraryIcon /></li>
                        <li>Práticas Pedagógicas</li>
                    </ul>                    
                </MenuLink>
            </section>
        </nav>
    )
}