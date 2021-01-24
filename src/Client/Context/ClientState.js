import Axios from 'axios';
import React, { useReducer } from 'react'
import ClientContext from './ClientContext';
import ClientReducer from './ClientReducer'
import { GET_SIDEBAR, SHOW_COURSE_DATA, TITLE_DATA } from './Type';

const initialState = {
    loading: true,
    sidebarData: [],
    collectionName: null,
    showCourseData:[],
    image:null,
    titleData:[]
}
function ClientState({ children }) {

    const [state, dispatch] = useReducer(ClientReducer, initialState);

    //get Sidebar data
    const sidebar = async () => {
        const res = await Axios.get("https://talented-actually-flower.glitch.me/cdclient/title");
        if (res.data.result === "Ok") {
            dispatch({
                type: GET_SIDEBAR,
                payload: res.data
            })
        }
    }

    //get course data using collection
    const courseData = async (collection) => {
        const res = await Axios.get("https://talented-actually-flower.glitch.me/cdclient/courseData", { params: { collection: collection } });
        if(res.data.result === "Ok"){
            dispatch({
                type:SHOW_COURSE_DATA,
                payload:res.data
            })
        }
    }
    //get courseData using id 
    const titleWiseData = async(collection,id)=>{
        const res = await Axios.get("https://talented-actually-flower.glitch.me/cdclient/getDataUsingTitle",{params:{collection:collection,id:id}})
       if(res.data.result === "Ok"){
           dispatch({
               type:TITLE_DATA,
               payload:res.data
           })
       }
    }

    return (
        <ClientContext.Provider value={{
            sidebarData: state.sidebarData,
            collectionName: state.collectionName,
            showCourseData:state.showCourseData,
            titleData:state.titleData,
            image:state.image,
            sidebar,
            courseData,
            titleWiseData
        }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientState
