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
                clientId="208031768939-0n22bao04o2ge8r8ca7v1f1vnj5l04u8.apps.googleusercontent.com"
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
