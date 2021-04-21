import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import nature from '../../../images/n1.jpg';
import ProfilePicture from './ProfilePicture';
import { BrowserRouter } from 'react-router-dom';
import AddProfilePicture from './AddProfilePicture';

const ProfileAndCoverPhoto = () => {
    const background = { backgroundImage: `url('${nature}')` };
    const cls = useStyles();
    const [uploadProfilePicture, setUploadProfilePicture] = useState(false);
    
    return (
        <BrowserRouter>
            <Grid container className={cls.root}>
                <Grid item xs={12}>
                    <div className={cls.coverPhotoContainer} style={background} >
                        <ProfilePicture setProfile={setUploadProfilePicture} src={nature} />
                        {uploadProfilePicture && <AddProfilePicture />}
                    </div>
                </Grid>

            </Grid>
        </BrowserRouter>
    );
};

export default ProfileAndCoverPhoto;