import React from 'react';
import styles from './Footer.module.css';
import image from '../../assets/images/Sin deli logoç.png';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.logoTextContainer}>
                <div>
                    <img className={styles.image} src={image} alt="Deli Logo" />
                </div>
                <div className={styles.footerLeft}>
                    <p>si necesitas ayuda no dudes en dirigirte a nuestra área de soporte o contactarnos a través del chat de sistema.</p>
                </div>
            </div>
            <div className={styles.footerRight}>
                <p>© 2024 Deli Red Social</p>
            </div>
        </footer>
    );
};

export default Footer;
