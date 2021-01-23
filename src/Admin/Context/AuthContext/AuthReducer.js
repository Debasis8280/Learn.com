import { CLEAR_ERROR, GET_ADMIN, GET_ADMIN_FAILED, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "../Type";

 
 const AuthReducer = (state,{type,payload} ) =>{
    switch(type){
        case GET_ADMIN:
            return{
                ...state,
                adminAuth:true,
                admin:payload,
                errors:null
            }
        case LOGIN_SUCCESS :
            localStorage.setItem("Debasis",payload.token)
            localStorage.setItem("Debasis1",payload.auth)
            return{
                ...state,
                adminAuth:true,
                errors:null,
                message:payload.message
            }
        case LOGIN_FAILED :
        case GET_ADMIN_FAILED:
            localStorage.clear();
            return{
                ...state,
                adminAuth:false,
                errors:payload.message,
                admin:null
            }
        case LOGOUT:
        case CLEAR_ERROR :
            localStorage.clear();
            return{
                ...state,
                adminAuth:false,
                errors:null,
                admin:null
            }
        default :
            return state;
    }
 }

 export default AuthReducer;