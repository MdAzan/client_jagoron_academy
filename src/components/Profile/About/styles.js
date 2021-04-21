import { makeStyles } from "@material-ui/styles";


export const useStyles = makeStyles({
    root: {
        minHeight: '300px',
        paddingBottom: '30px',
        paddingTop: '30px'
    },
    subRoot: {
        width: '650px',
        minHeight: '300px',
        margin: '0 auto',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa'
    },
    leftPart:{
        width: '30%',
        borderRight: '1px solid lightgray',
        minHeight: 'inherit',
        padding: '0 20px'
    },
    rightPart: {
        width: '70%',
        padding: '0 10px',
    },
    LinkOfAbout:{
        textDecoration: 'none',
        color: 'green',
        fontSize: '18px'
    },
    listLink:{
        margin: '0 0 10px 0'
    },
    title:{
        fontSize: '20px'
    },
    rootComponent:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        marginBottom: '10px',
    },
    subRootComponent:{
        display: 'flex',
    },
    parentOfEditIcon:{
        cursor: 'pointer',
        color: 'lightgray',
        marginTop: '10px'
    },
    select:{
        width: '100%',
        padding: '10px',
        border: '3px solid gray',
        borderRadius: '6px'
    },
    option: {
        margin: '7px 0',
        display: 'block',
        border: '2px solid black'
    },
    inputRoot:{
        padding: '15px',
    },
    saveParent:{
        padding: '10px',
        textAlign:'right',
    },
    saveBtn:{
        cursor: 'pointer'
    }
    
});