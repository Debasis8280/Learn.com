import { GET_SIDEBAR, SHOW_COURSE_DATA, TITLE_DATA } from "./Type";

function ClientReducer(state,{type,payload}) {
    switch(type){
        case GET_SIDEBAR:
            return{
                ...state,
                sidebarData:payload.data,
                collectionName:payload.collection,
                loading:false
            }
        case SHOW_COURSE_DATA:
            return{
                ...state,
                showCourseData:payload.data,
                image:payload.image,
                loading:false
            }
        case TITLE_DATA:
            return{
                ...state,
                titleData:payload.data,
                image:payload.image
            }
        default:
            return state;
    }
   
}

export default ClientReducer
