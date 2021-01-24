import Axios from 'axios'
import React, { useReducer } from 'react'
import AuthContext from "./AuthContext"
import AuthReducer from './AuthReducer'
import {
    ERROR, 
    LOGIN_FAILED, 
    LOGIN_SUCCESS,
    GET_ADMIN,
    GET_ADMIN_FAILED,
    LOGOUT,
    CLEAR_ERROR
} from "../Type"
import swal from 'sweetalert'

const initialState = {
    adminAuth : localStorage.getItem("Debasis1") === "true" ? true : false,
    errors:null,
    admin:[],
}

function AuthState({children}) {
  const token = localStorage.getItem("Debasis");

   const [state, disPatch] = useReducer(AuthReducer, initialState)

   //login Admin
   const login = async (data) => {
       try{
            const res = await Axios.post("https://wobbly-speckle-nylon.glitch.me/admin/login",data);
            if(res.data.result === "Ok"){
                swal({
                    icon:"success",
                    title:res.data.message,
                })
                disPatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                })
            }else{
                swal({
                    icon:"error",
                    title:res.data.message,
                    text:res.data.title
                })
                disPatch({
                    type:LOGIN_FAILED,
                    payload:res.data
                })
            }
        }catch(err){
            disPatch({
                type:ERROR,
                payload:err.message
            })
        }   
   }

   
  
   //get admin 
   const getAdmin = async () =>{
       try{
        const res = await Axios.get("https://wobbly-speckle-nylon.glitch.me/admin/getAdmin",{headers:{"x-auth-Debasis":token}})
        if(res.data.result === "Ok"){
            disPatch({
                type:GET_ADMIN,
                payload:res.data.admin
            })
        }
        else{
            disPatch({
                type:GET_ADMIN_FAILED,
                payload:res.data
            })
        }
       }catch(err){
            disPatch({
                type:ERROR,
                payload:err.message
            })
        }
        
   }

   //logout
   const logout = () =>{
       disPatch({
           type:LOGOUT,
       })
   }

   //clear error
   const ClearError = () =>{
       disPatch({
           type:CLEAR_ERROR,
       })
   }
    return (
        <AuthContext.Provider value={{
            adminAuth : state.adminAuth,
            errors : state.errors,
            admin:state.admin,
            login,
            getAdmin,
            logout,
            ClearError
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
