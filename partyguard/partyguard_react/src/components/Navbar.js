import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.navbarBrand}>
                <Link to="/" style={styles.link}>PartyGuard</Link>
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Eventos</Link>
                </li>
                {/* Puedes agregar más enlaces aquí si los necesitas */}
            </ul>
        </nav>
    );
};

// Estilos para la navbar con efectos y colores modernos
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1b1e34',  // Fondo oscuro
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',  // Sombras suaves
    },
    navbarBrand: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#66fcf1',  // Color neón cian
        textShadow: '0px 0px 5px rgba(102, 252, 241, 0.5)',  // Sombra luminosa
        transition: 'color 0.3s ease, text-shadow 0.3s ease',  // Transición suave
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        margin: 0,
    },
    navItem: {
        textDecoration: 'none',
    },
    link: {
        color: '#e0e0e0',  // Color claro
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s ease, text-shadow 0.3s ease',  // Transiciones
    },
    linkHover: {
        color: '#66fcf1',  // Efecto hover neón
        textShadow: '0px 0px 10px rgba(102, 252, 241, 0.7)',  // Brillo suave
    }
};

export default Navbar;
