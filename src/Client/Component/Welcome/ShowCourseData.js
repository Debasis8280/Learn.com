import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, useParams, Switch, Route, NavLink } from "react-router-dom"
import ClientContext from '../../Context/ClientContext'
import Navbar from '../Navbar/Navbar'
import AllCourseIntroduction from '../Static/AllCourseIntroduction'
import "./css/ShowCourseData.css"
import ShowCourseDataUsingTitle from './ShowCourseDataUsingTitle'

function ShowCourseData(props) {

  const { collection, course } = useParams();
  if (collection) {
    localStorage.setItem("collection", collection)
    localStorage.setItem("course", course)
  }
  const { courseData, showCourseData } = useContext(ClientContext);

  useEffect(() => {
    courseData(localStorage.getItem("collection"));
    document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
      toggle.addEventListener('click', e => {
        const sidebarID = toggle.dataset.toggleSidebar;
        const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
        if (sidebarElement) {
          let sidebarState = sidebarElement.getAttribute('aria-hidden');
          sidebarElement.setAttribute('aria-hidden', sidebarState === 'true' ? false : true);
          let contentTitle = document.getElementById("contentTitle");
          contentTitle.setAttribute('style',sidebarState === 'true' ? "margin-left:-15%" : true);
        }
      });
    });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Navbar />
      <Router>
        <div style={{ display: 'flex' }}>

          <div id="sidebar1" className="sidebarTitle" aria-hidden="true">
            <div className="btnSidebar">
              <button data-toggle-sidebar="sidebar1" ><span className="navbar-toggler-icon "></span></button>
            </div>
            <div className="sidebar__content">
              {showCourseData.map((data, key) => {
                return (
                  <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }} to={`/title/${data._id}`} key={key} className="title" style={{ textDecoration: "none" }}><div>{data.title}</div></NavLink>
                )
              })}
              <p>coming soon</p>
            </div>
          </div>

          <div className="contentTitle" id="contentTitle">
            {window.location.pathname === `/course/${localStorage.getItem("course")}/${localStorage.getItem("collection")}` ? (
              <AllCourseIntroduction course={props.match.params.course} />
            ) : (
                "")}
            <Switch>
              <Route exact path="/title/:id" component={ShowCourseDataUsingTitle} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default ShowCourseData;