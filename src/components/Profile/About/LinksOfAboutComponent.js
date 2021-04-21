import React from 'react';
import { Link } from 'react-router-dom';

const LinksOfAboutComponent = ({ url, listLink, LinkOfAbout, n_key }) => {
    return (
        <div className={listLink}>
            <Link className={LinkOfAbout} to={`${url}/${n_key}`}>{n_key}</Link>
        </div>
    );
};

export default LinksOfAboutComponent;



