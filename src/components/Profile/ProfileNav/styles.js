import { makeStyles } from "@material-ui/styles";


export const useStyles = makeStyles({
    root:{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    Link:{
        textDecoration: 'none',
        color: 'darkcyan',
        margin: '0 7px',
    },
    logoutBtn: {
        cursor: 'pointer',
    }
});