import React from 'react';
import backgroundImage from '../../assets/images/white-deli-logo.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.image} src={backgroundImage} alt="Deli Logo" />
        </div>
    );
};

export default Header;
