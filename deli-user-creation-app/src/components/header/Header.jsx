import React from 'react';
import backgroundImage from '../../assets/images/2722306520.png';

const Header = () => {
    return (
        <header style={styles.header} />
    );
};

const styles = {
    header: {
        background: `url(${backgroundImage}) center/cover no-repeat`,
        backgroundColor: '#e65624',
        height: '50px',
        backgroundSize: '350px 350px',
    },
};

export default Header;
