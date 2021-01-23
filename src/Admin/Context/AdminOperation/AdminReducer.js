import {
  CREATE_COLLECTION,
  CREATE_COLLECTION_FAILED,
  GET_COLLECTION,
  GET_COLLECTION_FAILED,
  DISPLAY_COURSE_DATA,
  DISPLAY_SEARCH_DATA,
  DISPLAY_SEARCH_DATA_FAILED,
  SHOW_EDIT_DATA,
} from "../Type";

function AdminReducer(state, { type, payload }) {
  switch (type) {
    case SHOW_EDIT_DATA:
      return {
        ...state,
        loading: false,
      };
    case DISPLAY_SEARCH_DATA_FAILED:
      return {
        ...state,
        errors: payload,
      };
    case DISPLAY_SEARCH_DATA:
      return {
        ...state,
        searchData: payload.data,
        image: payload.image,
        errors: null,
      };
    case DISPLAY_COURSE_DATA:
      return {
        ...state,
        displayCourseData: payload.data,
        image: payload.image,
        loading: false,
      };
    case GET_COLLECTION:
      return {
        ...state,
        errors: null,
        collection: payload,
        loading: false,
      };
    case CREATE_COLLECTION:
    case GET_COLLECTION_FAILED:
      return {
        ...state,
        errors: null,
        collection: [],
      };
    case CREATE_COLLECTION_FAILED:
      return {
        ...state,
        errors: null,
        collection: [],
      };
    default:
      return state;
  }
}

export default AdminReducer;
