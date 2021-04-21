import React from 'react';
import { AddIcCallRounded, Email, MyLocation } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';


const Contact = () => {
    const user = useSelector(state => state.user);
    const cls = useStyles();
    return (
        <div>

            <span className={cls.title}>Contact Information</span>

            <div className={cls.rootComponent}>
                <div style={{ display: 'flex' }}>
                    <AddIcCallRounded />
                    <span style={{ marginLeft: '7px' }}>{user && user?.phoneNumber}</span>
                </div>
            </div>

            <div className={cls.rootComponent}>
                <div style={{ display: 'flex' }}>
                    <Email />
                    <span style={{ marginLeft: '7px' }}>{user && user?.email}</span>
                </div>
            </div>

            <div className={cls.rootComponent}>
                <div style={{ display: 'flex' }}>
                    <MyLocation />
                    <span style={{ marginLeft: '7px' }}>not set yet</span>
                </div>
            </div>

        </div>
    );
};

export default Contact;