import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { beLoggedOut } from '../../../actions/authAction';
import { useStyles } from './styles';

const ProfileNav = ({url}) => {
    const history = useHistory();
    const cls = useStyles();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(beLoggedOut(history));
    }
    return (
        <div className={cls.root}>
            <Link className={cls.Link} to={`${url}/about/personal`}>About</Link>
            <Link className={cls.Link} to={`${url}/privacy`}>Privacy</Link>
            <Link className={cls.Link} to={`${url}/notification`}>Notifications</Link>
            <span className={cls.logoutBtn} onClick={handleLogout}>Logout</span>
        </div>
    );
};

export default ProfileNav;