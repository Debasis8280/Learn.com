import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import AdminState from '../Context/AdminOperation/AdminState';
import AuthContext from '../Context/AuthContext/AuthContext'

function PrivateRoute({component:Component,...rest}) {
    const {adminAuth} = useContext(AuthContext);

    return (
       <Route
        {...rest}
        render={props =>(
            adminAuth 
            ? <AdminState><Component {...props}/></AdminState>
            : <Redirect to="/Debasis"/>
        )}
       >

       </Route>
    )
}

export default PrivateRoute
