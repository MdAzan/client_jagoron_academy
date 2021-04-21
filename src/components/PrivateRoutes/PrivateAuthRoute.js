import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateAuthRoute = ({children, ...rest}) => {
    let user = useSelector(state => state.user);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateAuthRoute;
