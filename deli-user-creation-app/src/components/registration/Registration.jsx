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

        if (username && 
            age && 
            fullName && 
            email && 
            country && 
            email.includes('@') && 
            email.includes('.')
        ){
            setEnableRegister(true);
        }

        console.log('hola')

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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle registration logic
        axios.post('http://localhost:3001/accounts', {
            username,
            age,
            fullName,
            email,
            country,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={styles.container}>
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
                        <button className={styles.button} type="submit" disabled={!enableRegister}>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// const styles = {
//     imageContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         border: '1px solid black',
//         padding: '10px',
//     },  
//     '@media (max-width: 768px)': {
//         imageContainer: {
//             display: 'none',
//         },
//     },
//     mainImage: {
//         // width: '100%',
//         // height: '100%',
//     },
//     '@media (max-width: 768px)': {
//         mainImage: {
//             display: 'none',
//         },
//     },
//     container: {
//         display: 'flex',
//         height: '90vh',
//         width: '100%',
//     },
//     registerContainer: {
//         textAlign: 'center',
//         border: '3px solid black',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//     },
//     input: {
//         display: 'flex',
//         justifyContent: 'center',
//         border: '1px solid black',
//         borderRadius: '3px',
//         borderColor: 'gray',
//         height: '30px',
//         width: '400%',
//         maxWidth: '300px',
//         outline: 'none',
//         fontWeight: 'bold',
//         paddingLeft: '10px',
//     },
//     inputContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100%',
//     },
//     h1: {
//         fontSize: '30px',
//         color: '#e65624',
//         border: '1px solid black',
//         display: 'flex',
//         justifyContent: 'center',
//     },
//     h3: {
//         color: 'gray',
//         fontSize: '13px',
//         fontWeight: 'bold',
//         marginBottom: '30px',
//     },
//     formContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         border: '1px solid black',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '15%',
//     },
//     button: {
//         marginTop: '10px',
//         padding: '10px',
//         backgroundColor: '#e65624',
//         color: '#fff',
//         cursor: 'pointer',
//         borderRadius: '5px',
//     },

// };

export default RegistrationComponent;