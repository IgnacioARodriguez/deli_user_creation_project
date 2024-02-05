import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footerContainer}>
            <div>
                <p>si necesitas ayuda no dudes en dirigirte a nuestra área de soporte o contactarnos a través del chat de sistema.</p>
            </div>
            <div>
                <p>© 2024 Deli Red Social</p>
            </div>
        </footer>
    );
};

const styles = {
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid black',
    },
    footerLeft: {
        backgroundColor: '#e65624',
        height: '50px',
        display: 'flex',
    },
    footerRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
};

export default Footer;
