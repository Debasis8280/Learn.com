import React, { useContext, useEffect } from 'react'
import "./css/SideBar.css"
import ClientContext from '../../Context/ClientContext';
import WelcomData from './WelcomData';

function SideBar() {
  const { sidebar, sidebarData, collectionName } = useContext(ClientContext);
  useEffect(() => {
    sidebar();
    document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
      toggle.addEventListener('click', e => {
        const sidebarID = toggle.dataset.toggleSidebar;
        const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
        if (sidebarElement) {
          let sidebarState = sidebarElement.getAttribute('aria-hidden');
          sidebarElement.setAttribute('aria-hidden', sidebarState === 'true' ? false : true);
          let sidebarWelcomedata = document.getElementById("sidebarWelcomedata");
          sidebarWelcomedata.setAttribute('style', sidebarState === 'true' ? "margin-left:-10%" : true);

        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let i = 0;
  return (
    <div className="sidebarWithWelcomeData">
      <div id="sidebar1" className="sidebar" aria-label="Main sidebar containing navigation links and some information" aria-hidden="true">
        <button data-toggle-sidebar="sidebar1" className="btnSidebar"><span className="navbar-toggler-icon "></span></button>         <div className="sidebar__content">
          {sidebarData.map((data, key) => {
            return <a href={`course/${data.courseName}/${collectionName[i]}`}
              key={key} style={{ textDecoration: "none" }}><span className="sidebarData" >{data.courseName}<br /></span><span className="increment">{i++}</span></a>
          })}
        </div>
      </div>
      <div id="sidebarWelcomedata">
        <WelcomData />
      </div>
    </div>
  );
}

export default SideBar;
