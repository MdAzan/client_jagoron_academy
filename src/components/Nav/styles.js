import {makeStyles} from '@material-ui/core/styles';

 const useStyles = makeStyles({
    root: {
        backgroundColor: '#f8f9fa',
        minHeight: '80px',
        padding: '0 10px',
    },
    link: {
        textDecoration: 'none',
        color: 'green',
        margin: '0 7px'
    },
    title:{
        lineHeight: '100%',
        textAlign: 'center',
        fontSize: '17px',
        color: 'green',
        cursor:'pointer',
    },
    titleLink:{
        textDecoration:'none'
    },
    auth:{
        display: 'flex',
        color: 'green',
        justifyContent: 'center',
        textDecoration: 'none'
    },
    welcome:{
        display: 'flex',
        justifyContent: 'center',
        color: 'green'
    },
    logoutButton:{
        marginLeft: '10px',
        color: 'red',
        cursor: 'pointer',
        textDecoration: 'underline',
        padding: '0 10px',
        borderRadius: '7px'
    },
    imageNameContainerInNav:{
        width: '160px',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        height: '80px',
        alignItems: 'center',
        color: 'orangered'
    },
    userImageContainerInNav:{
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        overflow: 'hidden',
    },
    userImageInNav:{
        width: '100%',
        height: '100%'
    }
})

export default useStyles;