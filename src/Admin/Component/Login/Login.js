import React, { useContext, useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import AuthContext from '../../Context/AuthContext/AuthContext';

const Login = (props) => {
    const {login,adminAuth} = useContext(AuthContext);
   useEffect(() => {
       if(adminAuth){
           props.history.push("/AdminHome");
       }
   },[adminAuth,props.history])
   
    document.title ="Admin Login"
    
    const responseGoogle = (res) =>{
        if(res.profileObj){
        login({
            email:res.profileObj.email,
            googleId:res.profileObj.googleId
        })
    }
    }


    
    return (  
        <div className="container">
            <div className="row justify-content-center" id="google">
            <GoogleLogin 
                clientId="953777575523-cujjughih9e61dh10r2e0bl667h1rgvt.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
        </div>
    )
}

export default Login
