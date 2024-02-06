import React, { useState } from 'react';
import axios from 'axios';
import RegistrationComponent from '../../components/registration/Registration';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './RegistrationView.module.css';

const RegistrationView = () => {

    return (
        <div className={styles.registrationViewContainer}>
            <Header />
            <RegistrationComponent />
            <Footer />
        </div>
    );
};

export default RegistrationView;
