import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import LinksOfAboutComponent from './LinksOfAboutComponent';
import { BrowserRouter, Switch, useRouteMatch, Route, useParams } from 'react-router-dom';
import Contact from './Contact';
import Education from './Education';
import Personal from './Personal';

const About = () => {
    const cls = useStyles();
    const { path, url } = useRouteMatch();
    
    return (
        <Container className={cls.root} >
            <BrowserRouter>
                <Grid container className={cls.subRoot}>
                    <Grid item xs={4} className={cls.leftPart}>
                        <LinksOfAboutComponent url={url} listLink={cls.listLink} LinkOfAbout={cls.LinkOfAbout} n_key={'personal'} />
                        <LinksOfAboutComponent url={url} listLink={cls.listLink} LinkOfAbout={cls.LinkOfAbout} n_key={'education'} />
                        <LinksOfAboutComponent url={url} listLink={cls.listLink} LinkOfAbout={cls.LinkOfAbout} n_key={'contact'} />
                    </Grid>
                    <Grid item xs={8} className={cls.rightPart}>
                        <Switch>
                            <Route path={`${path}/:topic`}>
                                <ShowChildOfAbout />
                            </Route>
                            <Route path={`${path}/:topic`}>
                                <ShowChildOfAbout />
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </Container>
    );
};


export default About;


const ShowChildOfAbout = () => {
    let {topic} = useParams();
    
    return (
        <div>
            {(topic === 'contact') && <Contact />}
            {(topic === 'education') && <Education />}
            {(topic === 'personal') && <Personal />}
            {(topic !== 'personal' && topic !== 'education' && topic !== 'contact') && <NotFound />}
        </div>
    )
}


const NotFound = () => {
    return(
        <h1 style={{color: 'red', textAlign:'center'}}>404 Not Found</h1>
    )
}


