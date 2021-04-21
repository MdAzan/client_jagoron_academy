import React from 'react';
import { useStyles } from './styles';

const ProfilePicture = ({ src, setProfile }) => {
    const cls = useStyles();
    const handleAddProfilePicture = () => {
        setProfile(prev => !prev);
    }
    return (
        <div
            className={cls.rootOfProfilePicture}
            onClick={handleAddProfilePicture}
        >
            <img src={src} alt="Nothing is found" className={cls.profilePicture} />
        </div>
    );
};

export default ProfilePicture;