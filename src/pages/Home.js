import React, { useState, useEffect } from 'react';
import fire from '../fire';
import './Home.css';
function Home() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };
    const forgotPassword = (email) => {
        fire.auth().sendPasswordResetEmail(email)
            .then(function () {
                alert('Please check your email')
            }).catch(function (e) {
                console.log(e)
            })
    }
    useEffect(() => {
        authListener();
    }, []);
    const FrontPage = () => {
        return (
            <div className="front-page">
                <h1>Login sucessfully</h1>
            </div>
        );
    }

    return (
        <div className="home">

            {user ? <FrontPage /> :
                <section className="login">
                    <div className="loginContainer">
                        <label>Username</label>
                        <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                        <p className="errorMsg">{emailError}</p>
                        <label>Password</label>
                        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                        <p className="errorMsg">{passwordError}</p>
                        <div className="btnContainer">
                            {hasAccount ? (
                                <React.Fragment>
                                    <button className="signInButton" onClick={handleLogin}>Sign In</button>
                                    <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span><button className="resetButton" onClick={() => forgotPassword(email)}>Reset password</button></p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <button className="signUpButton" onClick={handleSignup}>Sign Up</button>
                                    <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                </section>
            }
        </div>

    )
}

export default Home;
