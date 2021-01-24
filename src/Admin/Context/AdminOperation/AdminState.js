import Axios from "axios";
import React, { useReducer } from "react";
import AdminContext from "./AdminContext";
import AdminReducer from "./AdminReducer";
import { toast } from "react-toastify";
import {
  CREATE_COLLECTION,
  GET_COLLECTION,
  GET_COLLECTION_FAILED,
  DISPLAY_COURSE_DATA,
  DISPLAY_SEARCH_DATA,
  DISPLAY_SEARCH_DATA_FAILED,
  SHOW_EDIT_DATA,
} from "../Type";
const initialState = {
  errors: null,
  collection: [],
  collectionData: [],
  displayCourseData: [],
  image: [],
  loading: true,
  searchData: [],
};

function AdminState({ children }) {
  const [state, disPatch] = useReducer(AdminReducer, initialState);
  const token = localStorage.getItem("Debasis");

  //create collection
  const createCollection = async (collection) => {
    const res = await Axios.post("https://wobbly-speckle-nylon.glitch.me/course/createCollection", collection, {
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      getCollection();
      toast.success(res.data.message);
      disPatch({
        type: CREATE_COLLECTION,
      });
    } else {
      toast.error(res.data.message);
    }
  };

  //get collection list
  const getCollection = async () => {
    const res = await Axios.get("https://wobbly-speckle-nylon.glitch.me/course/collection-list", {
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      disPatch({
        type: GET_COLLECTION,
        payload: res.data.data,
      });
    } else {
      disPatch({
        type: GET_COLLECTION_FAILED,
      });
    }
  };

  //delete Collection
  const deleteCollections = async (collection) => {
    const res = await Axios.get("https://wobbly-speckle-nylon.glitch.me/course/deleteCollection", {
      params: { collection: collection },
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      getCollection();
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };
  // save data
  const writeCourse = async (formData) => {
    const res = await Axios.post("https://wobbly-speckle-nylon.glitch.me/course/save/", formData, {
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  //getCourse data
  const getCourseData = async (collection) => {
    const res = await Axios.get("https://wobbly-speckle-nylon.glitch.me/course/getCourseData", {
      params: { collection: collection },
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      disPatch({
        type: DISPLAY_COURSE_DATA,
        payload: res.data,
      });
    } else {
      toast.error(res.data.message);
    }
  };

  //search Course
  const searchCourse = async (search, collection) => {
    const res = await Axios.get("https://wobbly-speckle-nylon.glitch.me/course/search", {
      params: { search: search, collection: collection },
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      disPatch({
        type: DISPLAY_SEARCH_DATA,
        payload: res.data,
      });
    } else {
      disPatch({
        type: DISPLAY_SEARCH_DATA_FAILED,
        payload: res.data,
      });
    }
  };

  //show edit data

  const ShowEditData = async (collection, id) => {
    const res = await Axios.get("https://wobbly-speckle-nylon.glitch.me/course/getSelectedData", {
      params: { collection: collection, id: id },
      headers: { "x-auth-Debasis": token },
    });
    if (res.data.result === "Ok") {
      disPatch({
        type:SHOW_EDIT_DATA
      })
      return res.data
    }
  };

  //update Course
  const updateCourse = async (updateData,collection,id) => {
    const res = await Axios.put("https://wobbly-speckle-nylon.glitch.me/course/updateCourse",updateData, {headers: { "x-auth-Debasis": token }});
    if(res.data.result === "Ok"){
      toast.success(res.data.message);
      ShowEditData(collection,id);
    }
  }

  //delete courese

  const deleteCourseData =async (collection,id) => {
      const res = await Axios.delete("https://wobbly-speckle-nylon.glitch.me/course/delete",{data:{collection:collection,id:id},headers: { "x-auth-Debasis": token }})
      if(res.data.result === "Ok"){
        toast.success(res.data.message);
        getCourseData(collection)
      }
  }   


  return (
    <AdminContext.Provider
      value={{
        error: state.errors,
        collections: state.collection,
        collectionData: state.collectionData,
        displayCourseData: state.displayCourseData,
        image: state.image,
        loading: state.loading,
        searchData: state.searchData,
        EditData: state.EditData,
        collectionName:state.collectionName,
        createCollection,
        getCollection,
        deleteCollections,
        writeCourse,
        getCourseData,
        searchCourse,
        ShowEditData,
        updateCourse,
        deleteCourseData
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminState;
