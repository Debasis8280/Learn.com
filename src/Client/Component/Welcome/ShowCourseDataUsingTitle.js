import React, { useContext, useEffect } from 'react'
import Loader from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import ClientContext from '../../Context/ClientContext';
import "./css/ShowCourseDataUsingTitle.css";
function ShowCourseDataUsingTitle(props) {
  const { id } = useParams();
  const { titleWiseData, loading, titleData,image } = useContext(ClientContext);
  useEffect(() => {
    titleWiseData(localStorage.getItem("collection"), id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  function UnsafeComponent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return (
    <div className="usingTitle">
      {!loading ? (
        <div>
          <div style={{ marginLeft:-15,textTransform:'capitalize' }}>
             <h4 className="col" style={{ color: "#610B38" }}>{titleData.title}</h4>
          </div>
          <div style={{ textTransform:'capitalize' }}>
            <h6>{titleData.subtitle}</h6>
          </div>
          <div className="col">
            <p className="col">
              {/* {titleData.body} */}
              {<UnsafeComponent html={titleData.body} />}
            </p>
          </div>
          {titleData.photo ? (
            <div>
              <span style={{ fontWeight:'bold' }}>Example</span>
              <div>
                <img src={image+"/"+titleData.photo} alt="titleImage" style={{height:"auto",width:"100%"}} className="fluid"/>
              </div>
            </div>
          ) :""}
        </div>
      ) : (
          <div className="loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        )}

    </div>
  )
}

export default ShowCourseDataUsingTitle
