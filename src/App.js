import React, { useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Exam from './components/Exam/Exam';
import PrivateAuthRoute from './components/PrivateRoutes/PrivateAuthRoute';
import { beLoggedIn, getCookie, getUserInfoOnPageLoad } from './actions/authAction';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import CreateExam from './components/CraeteExam/CreateExam';
import Profile from './components/Profile/Profile';




function App() {
  const dispatch = useDispatch();
  const [isProflieFetched, setIsProfileFetched] = useState(false);
  
  const session = getCookie('session');
  useEffect(() => {
   session ? getUserInfoOnPageLoad(session, (err, res) => {
     if(res){
       dispatch(beLoggedIn(res?.user));
       setIsProfileFetched(true);
     }
   }) : setIsProfileFetched(prev => !prev);

  }, [session,dispatch]);


  

  return (
    isProflieFetched &&
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/"> <CreateExam /> </Route>
        <Route path="/physics"><h1 style={{textAlign:'center'}}>PHYSICS PAGE</h1></Route>
        <Route path="/update"><h1 style={{textAlign:'center'}}>UPDATE PAGE</h1></Route>
        <Route path="/profile"> <Profile /> </Route>
        <PrivateAuthRoute path="/exam"> <Exam /> </PrivateAuthRoute>
        <Route path="/auth"> <Auth /> </Route>
        <Route path="*"><h1 style={{textAlign:'center'}}>404 PAGE NOT FOUND</h1></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
