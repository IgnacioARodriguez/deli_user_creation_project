import React, { useState } from 'react';
import axios from 'axios';
import styles from './Registration.module.css';

const RegistrationComponent = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [enableRegister, setEnableRegister] = useState(false);

    const handleRegisterFieldsChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'fullName':
                setFullName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'country':
                setCountry(value);
                break;
            default:
                break;
        }

        if (username && age && fullName && email && country && email.includes('@') && email.includes('.')) {
            setEnableRegister(true);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/accounts', {
            username,
            age,
            fullName,
            email,
            country,
        })
            .then((response) => {
                response.status === 201 ? window.location.replace('https://deli.com.br/pt-br/') : alert('Error al crear la cuenta');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.secondImageContainer}>
                <img className={styles.secondImage} src="https://i.pinimg.com/564x/2f/7f/54/2f7f54ade1adecb2dcc5943bac20cad8.jpg" alt="Deli Red Social" />
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.mainImage} src="https://i.pinimg.com/564x/f8/ce/5b/f8ce5b5de67cd7a2ba8c8f9b887a98ea.jpg" alt="Deli Red Social" />
            </div>
            <div className={styles.registerContainer}>
                <h1 className={styles.h1}>Crea tu cuenta</h1>
                <h3 className={styles.h3}>Empecemos con tu cuenta!</h3>
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.inputContainer}>
                            <input className={styles.input} placeholder='Email' type="text" name='email' value={email} onChange={handleRegisterFieldsChange} />
                        </label>
                        <br />
                        <label className={styles.inputContainer}>
                            <input className={styles.input} placeholder='Nombre completo' type="text" name='fullName' value={fullName} onChange={handleRegisterFieldsChange} />
                        </label>
                        <br />
                        <label className={styles.inputContainer}>
                            <input className={styles.input} placeholder='Edad' type="number" name='age' value={age} onChange={handleRegisterFieldsChange} />
                        </label>
                        <br />
                        <label className={styles.inputContainer}>
                            <input className={styles.input} placeholder='Nombre de usuario' type="text" name='username' value={username} onChange={handleRegisterFieldsChange} />
                        </label>
                        <br />
                        <label className={styles.inputContainer}>
                            <input className={styles.input} placeholder='País' type="text" name='country' value={country} onChange={handleRegisterFieldsChange} />
                        </label>
                        <br />
                        <button className={styles.button} type="submit" disabled={!enableRegister} style={{backgroundColor: enableRegister ? '#e65624' : 'gray'}}>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;