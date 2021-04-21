import React, { useState } from 'react';
import FileBase from 'react-file-base64';



const root = {
    width: '350px',
    height: '120px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px',
    position: 'absolute',
    top: '30%',
    left: '50%',
    marginTop: '-40px',
    marginLeft: '-175px'
}

const title = {
    textAlign: 'center'
}

const base = {
    width: '100%',
}

const rootBase = {
    textAlign: 'center',
    width: '100%'
}

const updateRoot = {
    textAlign: 'center',
    padding: '15px 0'
};

const updateButton = {
    backgroundColor: '#f8f9fa',
    padding: '5px',
    borderRadius: '3px',
    cursor: 'pointer'
}


const AddProfilePicture = () => {
    const [newProfilePicture, setNewProfilePicture] = useState('');
    const uploadProfilePicture = () => {
        if(newProfilePicture){
            
        }
    };

    return (
        <div style={root}>
            <div style={title}>add profile picture</div>
            <div style={rootBase}>
                <FileBase
                    style={base}
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setNewProfilePicture(base64)}
                />
            </div>
            <div style={updateRoot}>
                {newProfilePicture &&
                    <span style={updateButton} onClick={uploadProfilePicture}>
                        Update Profile Picture
                    </span>
                }
            </div>
        </div>
    );
};

export default AddProfilePicture;