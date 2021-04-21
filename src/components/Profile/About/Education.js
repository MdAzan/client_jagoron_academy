import React from 'react';
import { School as SchoolIcon, AddCircleOutline } from '@material-ui/icons';
import { useStyles } from './styles';


const parentOfSchool = {
    padding: '0 7px',
}

const parentOfEditIcon = {
    cursor: 'pointer',
    color: 'lightgray',
    marginTop: '10px'
}

const Education = () => {
    const cls = useStyles();
    return (
        <div>

            <span className={cls.title}>Education</span>

            <div className={cls.rootComponent}>
                <div className={cls.subRootComponent}>
                    <SchoolIcon />
                    <div style={parentOfSchool}>
                        <span>School</span>
                        <div>
                            <div>Akhanagar High School</div>
                            <div>Alor Mela Kg And High School</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={parentOfEditIcon}><AddCircleOutline /></div>
                </div>
            </div>

            <div className={cls.rootComponent}>
                <div className={cls.subRootComponent}>
                    <SchoolIcon />
                    <div style={parentOfSchool}>
                        <span>College</span>
                        <div>
                            <div>First Year in Science Group</div>
                            <div>Rangpur Public College</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={parentOfEditIcon}><AddCircleOutline /></div>
                </div>
            </div>

            <div className={cls.rootComponent}>
                <div className={cls.subRootComponent}>
                    <SchoolIcon />
                    <div style={parentOfSchool}>
                        <span>University</span>
                        <div>
                            <div>Bachelors Of Medicine, First Year</div>
                            <div>Sylhet University</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={parentOfEditIcon}><AddCircleOutline /></div>
                </div>
            </div>

        </div>
    );
};

export default Education;
