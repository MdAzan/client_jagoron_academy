import React from 'react';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    root:{
        fontSize: '30px',
    },
    one: {color: 'green'},
    two: {color: 'yellowgreen'},
    three: {color: 'orange'},
    four: {color: 'blue'},
    five: {color: 'orangered'},
    six: {color: 'darkcyan'},
    seven: {color: 'brown'},
    eight: {color: 'purple'},
    nine: {color: 'gray'},
    ten: {color: 'darkred'},
    eleven: {color: 'silver'},
    twelve: {color: 'darkred'},
    thirteen: {color: 'seagreen'},
});



const Logo = () => {
    const cls = useStyles();
    return (
        <div className={cls.root}>
            <span>
                <span className={cls.one}>J</span>
                <span className={cls.two}>a</span>
                <span className={cls.three}>g</span>
                <span className={cls.ten}>o</span>
                <span className={cls.four}>r</span>
                <span className={cls.five}>o</span>
                <span className={cls.six}>n</span>
            </span>
            <span style={{marginLeft: '15px'}}>
                <span className={cls.seven}>A</span>
                <span className={cls.eight}>c</span>
                <span className={cls.nine}>a</span>
                <span className={cls.ten}>d</span>
                <span className={cls.eleven}>e</span>
                <span className={cls.twelve}>m</span>
                <span className={cls.thirteen}>y</span>
            </span>
        </div>

    );
};

export default Logo;