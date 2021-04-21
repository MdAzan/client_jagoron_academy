import React, {useEffect, useState } from 'react';
import { Button, Container, Grid, LinearProgress } from "@material-ui/core";
import { Input } from './Input';

import {
    validateName,
    validateEmail,
    validatePhone,
    validatePassword,
    emptyWarnings,
    emptyFormDatda,
    handlePasswordMatcher,
    checkIfThisEmailAndPhonenumberIsAlreadyUsed_Handler,
    handleCreateAccountIfUserIsVerified,
    ifEmailAndPasswordIsMatchedThenLogin_Handler
} from './handleSignup';

import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';
import { beLoggedIn } from '../../../actions/authAction';
import { useDispatch } from 'react-redux';
import Logo from './Logo';

const EmailOrPhone = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cls = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const toggleSignInUp = () => setIsSignup(prev => !prev);

    const [showPassword, setShowPassword] = useState(false);

    const [warnings, setWarnings] = useState(emptyWarnings);
    const [formData, setFormData] = useState(emptyFormDatda);

    const [progress, setProgress] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);

    const [isEmail, setIsEmail] = useState(true);
    const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
    const [isMatchedVerificationCode, setIsMatchedVerificationCode] = useState(true);

    const [isPermitted, setIsPermitted] = useState(false);
    useEffect(() => {
        isPermitted ? setProgress(true) : setProgress(false);
    }, [isPermitted, setIsPermitted]);


    const validate = (e, err, res) => {
        if (err) {
            setWarnings({ ...warnings, [e.target.name]: err });
            setFormData({ ...formData, [e.target.name]: '' });
        } else {
            setWarnings({ ...warnings, [e.target.name]: '' });
            setFormData({ ...formData, [e.target.name]: res });
        }
    }

    const handleChange = (e) => {
        validateName(e, (err, res) => validate(e, err, res));
        validateEmail(e, (err, res) => validate(e, err, res));
        validatePhone(e, (err, res) => validate(e, err, res));
        validatePassword(e, (err, res) => validate(e, err, res));
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;
        const allFieldForSignupIsSet = firstName && lastName && email && phoneNumber && password;
        const allFieldForSigninIsSet = email && password;

        if (!firstName) {
            (!warnings.firstName) && (setWarnings({ ...warnings, 'firstName': 'first name is required' }));
        } else if (!lastName) {
            (!warnings.lastName) && (setWarnings({ ...warnings, 'lastName': 'last name is required' }));
        } else if (!email) {
            (!warnings.email) && (setWarnings({ ...warnings, 'email': 'email is required' }));
        } else if (!phoneNumber) {
            (!warnings.phoneNumber) && (setWarnings({ ...warnings, 'phoneNumber': 'phone number is required' }));
        } else if (!password) {
            (!warnings.password) && (setWarnings({ ...warnings, 'password': 'password is required' }));
        }





        // check if this email and phone number is already used or not
        (allFieldForSignupIsSet && isSignup) && (
            handlePasswordMatcher(password, confirmPassword, (passwordIsMatched) => {
                if (passwordIsMatched) {
                    checkIfThisEmailAndPhonenumberIsAlreadyUsed_Handler(formData, ((err, res) => {
                        res ? setIsAuthorized(true) : setWarnings({ ...warnings, ...err?.error });
                    }));
                }
                else {
                    setWarnings({ ...warnings, 'password': 'password does not match' });
                }
            })
        );

        if (!allFieldForSigninIsSet && !isSignup) {
            if (!email) {
                (!warnings.email) && (setWarnings({ ...warnings, 'email': 'Provide your email address for Jagoron Academy' }));
            } else if (!password) {
                (!warnings.password) && (setWarnings({ ...warnings, 'password': 'Password field is required' }));
            }
        };


        // handle signin
        if (allFieldForSigninIsSet && !isSignup) {
            setIsPermitted(true);
            ifEmailAndPasswordIsMatchedThenLogin_Handler({ email, password }, (err, res) => {
                if (res) {
                    const expireTime = Date.parse(new Date()) + (1000 * 60 * 60 * 24);
                    document.cookie = `session = ${res?.user?.session_id}; expires = ${new Date(expireTime).toUTCString()}; path=/;`;
                    dispatch(beLoggedIn(res?.user));
                    history.push('/');
                }
                else {
                    setWarnings({ ...warnings, ...err.error });
                    setIsPermitted(false);
                }
            })
        }
    }

    const handleShowPassword = () => setShowPassword(prev => !prev);
    const show = document.getElementById('checkbox');
    (showPassword) ? (show?.setAttribute('checked', 'true')) : (show?.removeAttribute('checked'));
    const createAccount = 'Create Your Jagoron Academy Account';
    const useAccount = 'Use Your Jagoron Academy Account';

    const handleSendVerificationCode = () => {
        setIsVerificationCodeSent(prev => !prev);
        const confirmedCode = document.getElementById('confirmationCodeGetter');
        confirmedCode.innerHTML = Math.round(Math.random() * 987645);
    };

    const handleResendVerificationCode = () => {
        setIsVerificationCodeSent(prev => !prev);
        setIsMatchedVerificationCode(true);
        document.getElementById('confirmationCodeGetter').innerHTML = '';
        document.getElementById('verificationCodeInheritorInput').value = '';
        document.getElementById('verificationCodeInheritorInput')?.setAttribute('placeholder', 'verification code');
    };

    const handleCreateAccount = () => {
        const isVerified = (document.getElementById('confirmationCodeGetter').innerHTML) ===
            (document.getElementById('verificationCodeInheritorInput').value);
        if (isVerified) {
            handleCreateAccountIfUserIsVerified(formData, (err, res) => {
                res ? history.push('/') : console.log(res);
            });
        } else {
            setIsMatchedVerificationCode(false);
        }
    };


    return (
        <>
            { (!isAuthorized && !progress) &&
                <div className={cls.root}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>

                            <Grid xs={12} item>
                                <div className={cls.logo}> <Logo /> </div>
                                <div className={cls.sign}> {isSignup ? 'SIGNUP' : 'SIGN IN'} </div>
                                <div className={cls.title}> {isSignup ? createAccount : useAccount} </div>
                            </Grid>

                            {isSignup &&
                                <Grid item xs={12} sm={6}>
                                    <Input
                                        name="firstName"
                                        label="first name"
                                        type="text"
                                        warn={warnings.firstName}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                            }

                            {isSignup &&
                                <Grid item xs={12} sm={6}>
                                    <Input
                                        name="lastName"
                                        label="last name"
                                        type="text"
                                        warn={warnings.lastName}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                            }

                            <Grid item xs={12} sm={6}>
                                <Input
                                    name="email"
                                    label="email"
                                    type="text"
                                    warn={warnings.email}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            {isSignup &&
                                <Grid item xs={12} sm={6}>
                                    <Input
                                        name="phoneNumber"
                                        label="phone number"
                                        type="text"
                                        warn={warnings.phoneNumber}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                            }

                            <Grid item xs={12} sm={6}>
                                <Input
                                    name="password" label="password"
                                    type={showPassword ? 'text' : 'password'}
                                    warn={warnings?.password}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            {isSignup &&
                                <Grid item xs={12} sm={6}>
                                    <Input name="confirmPassword"
                                        label="confirm password"
                                        type={showPassword ? "text" : "password"}
                                        handleChange={(e) => setFormData({ ...formData, 'confirmPassword': e.target.value })}
                                    />
                                </Grid>
                            }



                            <Grid item xs={12}>
                                {
                                    isSignup ? <input type="submit" className={cls.next} value="NEXT" /> :
                                        <Button className={cls.signin} type='submit'>SIGNIN</Button>
                                }
                            </Grid>

                        </Grid>
                    </form>

                    {/* extra infromation under the signup/signin form */}
                    <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                        <div draggable>
                            <span onClick={() => handleShowPassword()}>
                                <input type="checkbox" id="checkbox" className={cls.showPassword} />
                            </span>
                            <span>show password</span>
                        </div>

                        <span onClick={toggleSignInUp} className={cls.toggleSignInUp}>
                            {isSignup ? "I already have an account" : "I don't have any accont"}
                        </span>
                    </div>

                </div>
            }


            {isAuthorized &&                /* phone or email verification */
                <Grid container className={cls.root} >
                    <Grid xs={12} item>
                        <div id="confirmationCodeGetter" style={{ textAlign: 'center', height: '30px' }}></div>
                        <div className={cls.logo}> <Logo /> </div>
                        <div className={cls.sign}> SIGNUP PROCESSING </div>
                        <div className={cls.title}> verify your account</div>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={{ height: '50px' }}>
                            <input
                                type="text"
                                id="verificationCodeInheritorInput"
                                placeholder="verification code"
                                className={isMatchedVerificationCode ? cls.verificationCodeInheritorInput_normal :
                                    cls.verificationCodeInheritorInput_warning}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={cls.confirmationTitle}>
                            <div style={{ width: '40%' }}>
                                <span className={isEmail ? cls.isEmail : cls.notIsEmail}>Email</span>
                                <span>/</span>
                                <span className={!isEmail ? cls.isEmail : cls.notIsEmail}>Phone Number</span>
                            </div>
                            <div style={{ width: '60%' }}>
                                <input
                                    type="text"
                                    value={isEmail ? formData.email : formData.phoneNumber}
                                    className={cls.showIsEmail} disabled
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={cls.sendVerification}>
                            {!isVerificationCodeSent ?
                                <span className={cls.verificationCodeIsSentInEmail} onClick={() => setIsEmail(prev => !prev)} >
                                    use phone number instead email
                                </span>
                                :
                                <span className={cls.verificationCodeIsSentInEmail} onClick={handleResendVerificationCode}>
                                    resend code
                                </span>
                            }
                            {
                                !isVerificationCodeSent ?
                                    <span className={cls.verify} onClick={handleSendVerificationCode} >send verification code</span>
                                    :
                                    <span className={cls.verify} onClick={handleCreateAccount}>create account</span>
                            }
                        </div>
                    </Grid>
                </Grid>
            }
            {
                progress &&
                <Container>
                    <Grid container className={cls.progressGrid} alignItems="center" justify="center" >
                        <Grid item className={cls.progressItem}>
                            <LinearProgress />
                            <p className={cls.verifyText}>LET US VERIFY YOUR INFORMATION</p>
                            <LinearProgress color="secondary" />
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    );
};

export default EmailOrPhone;