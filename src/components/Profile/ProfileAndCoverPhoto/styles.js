import {makeStyles} from '@material-ui/styles';


export const useStyles = makeStyles({
    root:{
        width: '100%',
        height: '450px',
        backgroundColor: 'lightgray'
    },
    coverPhotoContainer:{
        width: '100%',
        height: '450px',
        backgroundColor: 'green',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0 auto',
        position: 'relative',
    },
    rootOfProfilePicture: {
        width: '250px',
        height: '200px',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        marginLeft: '-125px',
        borderTopRightRadius: '3px',
        borderTopLeftRadius: '3px',
        boxShadow: '1px 1px 5px 2px #fff',
        cursor: 'pointer'
    },
    profilePicture:{
        width: '100%',
        height: '100%'
    }
});