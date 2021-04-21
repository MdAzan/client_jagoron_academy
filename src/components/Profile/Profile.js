import React from 'react';
import { BrowserRouter, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import ProfileAndCoverPhoto from './ProfileAndCoverPhoto/ProfileAndCoverPhoto';
import ProfileNav from './ProfileNav/ProfileNav';
import About from './About/About';
//import { useSelector } from 'react-redux';


const Profile = () => {
    let {path, url} = useRouteMatch();
    //const user = useSelector(state => state.user);
    
    
    
    return (
        <BrowserRouter>
           <ProfileAndCoverPhoto />
           <ProfileNav url={url} />
           <Switch>
               <Route path={`${path}/:topicId`}>
                    <Elements />
               </Route>
           </Switch>
        </BrowserRouter>
    );
};

export default Profile;


const Elements = () => {
    let {topicId} = useParams();
    return(
        <div style={{minHeight: '400px', backgroundColor: 'white'}}>
            { (topicId === 'about') && <About />}
            { (topicId === 'privacy') && <h1>Privacy</h1>}
        </div>
    )
}