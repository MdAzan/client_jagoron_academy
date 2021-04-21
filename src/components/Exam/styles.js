import {makeStyles} from '@material-ui/styles';

export const useStyles = new makeStyles({
    root:{
        minHeight: '700px',
        paddingTop: '10px',
        paddingBottom: '50px'
    },
    rootTitle:{
        width: '500px',
        margin: '10px auto'
    },
    title: {
        color: 'green',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '0'
    },
    remainingTime: {
        textAlign: 'center',
        color: 'orange'
    },
    marksTimes:{
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    singleQuestion: {
        width: '500px',
        backgroundColor: '#f8f9fa',
        padding: '1px 20px 10px 20px',
        margin: '19px auto',
        borderRadius: '17px'
    },
    checkAndOptionContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkIcon:{
        display: 'flex',
        width: '30px',
        height: '100%',
        color: 'green',
    },
    clearIcon:{
        display: 'flex',
        width: '30px',
        height: '100%',
        color: 'red',
    },
    noIcon:{
        display: 'flex',
        width: '30px',
        height: '100%',
        color: 'green',
    },
    optionText: {
        backgroundColor: 'white',
        padding: '15px 0 15px 45px',
        margin:  '20px 10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '450px',
    },
    selectedText: {
        backgroundColor: 'green',
        padding: '15px 0 15px 45px',
        margin:  '20px 10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '450px',
        color: '#fff'
    },
    optionImage: {
        backgroundColor: 'none',
        margin:  '10px auto',
        cursor: 'pointer',
        width: '350px',
        height: '200px',
    },
    selectedImage: {
        overflow: 'hidden',
        margin:  '10px auto',
        cursor: 'pointer',
        width: '350px',
        height: '200px',
    },
    rightImage: {
        width: '350px',
        height: '200px',
        overflow: 'hidden',
        margin:  '50px auto',
        cursor: 'not-allowed',
    },
    normalImage: {
        width: '350px',
        height: '200px',
        overflow: 'hidden',
        margin:  '50px auto',
        cursor: 'not-allowed',
    },
    wrongImage: {
        width: '350px',
        height: '200px',
        overflow: 'hidden',
        margin:  '50px auto',
        cursor: 'not-allowed',
    },
    image:{
        width: '100%',
        height: '100%',
    },
    rightAnswer: {
        backgroundColor: 'green',
        padding: '15px 0 15px 45px',
        margin:  '20px 10px',
        borderRadius: '10px',
        cursor: 'not-allowed',
        width: '450px',
        color: '#fff'
    },
    wrongAnswer: {
        backgroundColor: 'red',
        padding: '15px 0 15px 45px',
        margin:  '20px 10px',
        borderRadius: '10px',
        cursor: 'not-allowed',
        width: '450px',
        color: '#fff'
    },
    normalAnswer: {
        backgroundColor: '#fff',
        padding: '15px 0 15px 45px',
        margin:  '20px 10px',
        borderRadius: '10px',
        cursor: 'not-allowed',
        width: '450px',
    },
    question: {
        textAlign: 'center',
        color: 'green',
        fontSize: '20px'
    },
    button: {
        display: 'block',
        margin: '10px auto',

    }
});