import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import Azan from "../../images/n1.jpg"





const Nav = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Grid item md={3} xs={3}>
                <Link to="/" className={classes.titleLink}><h3 className={classes.title}>Jagoron Academy</h3></Link>
            </Grid>
            <Grid item md={6} xs={5}>
                <Grid container justify="center" alignItems="center">
                    <Grid item>
                        <Link className={classes.link} to="/">Home</Link>
                    </Grid>
                    <Grid item>
                        <Link className={classes.link} to="/physics">Physics</Link>
                    </Grid>
                    <Grid item>
                        <Link className={classes.link} to="/update">Update</Link>
                    </Grid>
                    <Grid item>
                        <Link className={classes.link} to="/exam">Exam</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} md={3}>
                {user ?
                    <Link to="profile" className={classes.imageNameContainerInNav}>
                        <div className={classes.userImageContainerInNav}>
                            <img src={Azan} alt="A" className={classes.userImageInNav} />
                        </div>
                        <span className={classes.userNameInNav}>{`${user?.username}`}</span>
                    </Link>
                    :
                    <Link to="/auth" className={classes.auth}> <PersonAdd /> <span>signin</span> </Link>
                }
            </Grid>

        </Grid >
    );
};

export default Nav;