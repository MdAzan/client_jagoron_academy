import React, { useState } from 'react';

import { Person, Wc, Edit as EditIcon, Cake as CakeIcon } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { addGenderHandler } from './aboutHandler';





const parentOfBirthTime = {
    padding: '0 7px',
    marginTop: '-9px',
};


const birthYear = {
    padding: '10px 0'
}

const rootGender = {
    padding: '0 7px',
    marginTop: '-9px'
};



const Personal = () => {
    const user = useSelector(state => state.user);
    const cls = useStyles();
    const [editGender, setEditGender] = useState(false);

    const [formData, setFormData] = useState({gender: '', birth_date: '', birth_month: '', birth_year: ''});
    
    const handleGender = () => {
       if (formData.gender){
           addGenderHandler({gender: formData.gender, user: user?.email});
       }
    }

    const handleChange = (e) => {
       setFormData({...formData, [e.target.name] : e.target.value});
    }


    return (
        <div>

            <span className={cls.title}>Personal Information</span>

            <div className={cls.rootComponent}>
                <div className={cls.subRootComponent}>
                    <Person />
                    <span style={{ marginLeft: '7px' }}>{user && user?.username}</span>
                </div>
                <div>
                    <div className={cls.parentOfEditIcon}><EditIcon /></div>
                </div>
            </div>

            {editGender ?
                <div className={cls.inputRoot}>
                    <form>
                        <select name="gender" className={cls.select} onChange={handleChange} >
                            <option className={cls.option} value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </form>
                    <div className={cls.saveParent}>
                        <span className={cls.saveBtn} onClick={handleGender} >Save</span>
                    </div>
                </div>
                :
                <div className={cls.rootComponent}>
                    <div className={cls.subRootComponent}>
                        <Wc />
                        <div style={rootGender}>
                            <div>{user?.additional?.birth_info?.gender || 'not set yet'}</div>
                            <span>Gender</span>
                        </div>
                    </div>
                    <div className={cls.parentOfEditIcon}>
                        <div onClick={() => setEditGender(true)}><EditIcon /></div>
                    </div>
                </div>
            }

            <div className={cls.rootComponent}>
                <div className={cls.subRootComponent}>
                    <CakeIcon />
                    <div style={parentOfBirthTime}>
                        <div>
                            <div>not set yet</div>
                            <span>Birth Date</span>
                        </div>
                        <div style={birthYear}>
                            <div>not set yet</div>
                            <span>Birth Month</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={cls.parentOfEditIcon}><EditIcon /></div>
                </div>
            </div>

        </div>
    );
};

export default Personal;