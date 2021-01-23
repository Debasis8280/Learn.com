import { useContext, useEffect } from "react";
import {
  Route,
  useRouteMatch,
} from "react-router-dom";
import AdminState from "../Context/AdminOperation/AdminState";
import AuthContext from "../Context/AuthContext/AuthContext";
import Course from "./Dashboed/Course-list";
import NavBar from "./Dashboed/NavBar";
import EditCourse from "./Dashboed/EditCourse";
import WriteCourse from "./Dashboed/WriteCourse";
import EditCourseById from "./Dashboed/EditCourseById";

const AdminHome = (props) => {  
  document.title = "AdminHome";
  const { getAdmin } = useContext(AuthContext);
  useEffect(() => {
    getAdmin();
    // eslint-disable-next-line
  }, []);

  const { path } = useRouteMatch();
  return (
    <div>
    <AdminState>
      <NavBar />
        <Route exact path={`${path}/Course-list`} component={Course}></Route>
        <Route exact path={`${path}/Edit-Course/:course`} component={EditCourse}></Route>
        <Route exact path={`${path}/Edit-Course/EditByID/:course/:id`} component={EditCourseById}></Route>
        <Route exact path={`${path}/Write-Course/:course`} component={WriteCourse}></Route>
    </AdminState>
    </div>
  );
};

export default AdminHome;
