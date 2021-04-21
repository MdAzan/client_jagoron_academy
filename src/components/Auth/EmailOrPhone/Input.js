import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

export const Input = ({ name, label, handleChange, type, warn }) => {
    const cls = useStyles();
    return (
        <Grid item xs={12} style={{ height: '75px' }}>
            <div className={cls.inputParent}>
                <input
                    placeholder={label}
                    name={name}
                    type={type}
                    onBlur={handleChange}
                    className={warn ? (cls.warnInput) : (cls.input)}
                />
            </div>
            <div>
                <small style={{ color: 'red' }}>
                    {warn && warn}
                </small>
            </div>
        </Grid>
    );
};
