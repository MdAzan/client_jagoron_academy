import { makeStyles } from '@material-ui/styles';


export const useStyles = new makeStyles({
    root: {
        width: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid lightgray',
        padding: '40px',
        borderRadius: '7px'
    },
    signin: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        color: 'black',
        border: '2px solid lightgray',
        cursor: 'pointer',
        display: 'block',
        margin: '0 auto 30px auto',
        "&:active": {
            color: '#fff',
            backgroundColor: 'rgba(0, 128, 0, 0.233)',
            borderColor: 'green'
        }
    },
    next: {
        display: 'block',
        marginLeft: 'auto',
        width: '20%',
        padding: '8px',
        borderRadius: '5px',
        color: '#fff',
        border: '1px solid lightgray',
        cursor: 'pointer',
        backgroundColor: 'rgba(0,0,255, 0.950)',
        "&:active": {
            backgroundColor: 'rgba(0, 0, 255, 0.233)',
            borderColor: 'green'
        }
    }
    ,
    toggleSignInUp: {
        cursor: 'pointer',
        color: 'dark',
        textDecoration: 'underline',
        display: 'inline-block',
        "&:hover":{color: 'blue'}
    },
    progressContainer: {
        widht: '100%',
        height: '500px',
    },
    progressGrid: {
        width: '100%',
        height: '500px'
    },
    progressItem: {
        width: '400px',
        height: '200px',
    },
    verifyText: {
        textAlign: 'center',
        color: 'green'
    },
    title: {
        fontSize: '20px',
        textAlign: 'center',
        paddingBottom: '30px'
    },
    logo: {
        textAlign: 'center'
    },
    sign: {
        fontSize: '20px',
        textAlign: 'center',
        padding: '5px 0'
    },
    inputParent:{height: '40px'},
    input: {
        width: '100%',
        padding: '7px',
        borderRadius: '4px',
        border: '1.5px solid lightgray',
        outline: 'none',
        '&:focus': {
            border: '2px solid green'
        }
    },
    warnInput: {
        width: '100%',
        padding: '7px',
        borderRadius: '4px',
        border: '1px solid red',
        outline: 'none',
        '&:focus': {
            border: '2px solid red'
        }
    },
    showPassword:{
        cursor: 'pointer'
    },
    // confirm email or phone
    confirmationTitle:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    isEmail:{
        color: 'green',
        textDecoration: 'underline',
    },
    notIsEmail:{
        color: 'lightgray',
    },
    showIsEmail:{
        width: '100%',
        padding: '7px',
        textAlign: 'center',
        borderRadius: '6px',
        display: 'block',
        margin: '4px auto',
        fontSize: '15px',
    },
    sendVerification:{
        display: 'flex',
        justifyContent: 'space-between',
        height: '50px',
        alignItems: 'center'
    },
    verify:{
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px',
        "&:hover":{
            backgroundColor: 'rgba(0,0,255,0.090)',
        }
    },
    verificationCodeIsSentInEmail:{
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px',
        "&:hover":{
            backgroundColor: 'rgba(0,0,255,0.090)',
        }
    },
    verificationCodeInheritorInput_normal:{
        width: '70%',
        margin: '0 auto 20px auto',
        display: 'block',
        border: 'none',
        borderBottom: '2px solid lightgray',
        fontSize: '20px',
        textAlign: 'center',
        color: 'green',
        "&:focus":{
            outline: 'none'
        }
    },
    verificationCodeInheritorInput_warning:{
        width: '70%',
        margin: '0 auto 20px auto',
        display: 'block',
        border: 'none',
        borderBottom: '2px solid red',
        fontSize: '20px',
        textAlign: 'center',
        color: 'red',
        "&:focus":{
            outline: 'none'
        }
    },
    codeUnSent:{
        display: 'none'
    }
})