import React, { useState } from 'react';
import axios from 'axios';
import styles from './Registration.module.css';
import greenTick from '../../assets/images/transparent-green-tick-green-circle-with-white-tick-symbolizes-approval65a8e382ca82e2.4863980417055671068295.png';

const RegistrationComponent = () => {
    const [username, setUsername] = useState('');
    const [sucessfulRegistration, setSucessfulRegistration] = useState(false);
    const [usernameUsed, setUsernameUsed] = useState(false);
    const [age, setAge] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [emailUsed, setEmailUsed] = useState(false);
    const [country, setCountry] = useState('');
    const [enableRegister, setEnableRegister] = useState(false);

    const handleRegisterFieldsChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'username':
                setUsername(value);
                setUsernameUsed(false);
                break;
            case 'age':
                setAge(value);
                break;
            case 'fullName':
                setFullName(value);
                break;
            case 'email':
                setEmail(value);
                setEmailUsed(false);
                break;
            case 'country':
                setCountry(value);
                break;
            default:
                break;
        }

        console.log(username, age, fullName, email, country)

        if (username && age && fullName && email && country && email.includes('@') && email.includes('.')) {
            setEnableRegister(true);
        } else {
            setEnableRegister(false);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://deli-user-creation-project.onrender.com/api/accounts/', {
            username,
            age,
            fullName,
            email,
            country,
        })
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                    setSucessfulRegistration(true);
                } else {
                    alert('Error al crear usuario');
                }
            })
            .catch((error) => {
                if (error.response.status === 409 && error.response.data.error === 'Email already in use') {
                    setEnableRegister(false);
                    setEmailUsed(true);
                } else if (error.response.status === 409 && error.response.data.error === 'Username already in use') {
                    setEnableRegister(false);
                    setUsernameUsed(true);
                } else {
                    alert('Error al crear usuario');
                }
            });
    };

    return (
        <div>
            {!sucessfulRegistration ?
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
                                    {emailUsed ? <p className={styles.error}>Email no disponible</p> : null}
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
                                    {usernameUsed ? <p className={styles.error}>Nomre de usuario no disponible</p> : null}
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
            : null}
            {sucessfulRegistration ? 
                <div className={styles.successRegistrationContainer}>
                    <img className={styles.greenThick} src={greenTick} alt="Green Tick" />
                    <p>¡Usuario creado con éxito!</p>
                    <p className={styles.confirmationSubtitle}>Porfavor, revisa tu correo para confirmar tu cuenta</p>
                    <button className={styles.button} onClick={() => setSucessfulRegistration(false)}>Volver</button>
                </div>
            : null}
        </div>
    );
};

export default RegistrationComponent;