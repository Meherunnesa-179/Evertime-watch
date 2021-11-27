import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
  
const PrivateRoute = ({children, ...rest}) => {
   const {user , isLoading}= useFirebase()
   if(isLoading) {
       return "Content is Loading"
   }
    return (
        <div>
           <Route
            {...rest}
            
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
        </div>
    );
};

export default PrivateRoute