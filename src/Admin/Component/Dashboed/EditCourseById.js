import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import AdminContext from "../../Context/AdminOperation/AdminContext";
import "./Style/EditCourseById.css"

function EditCourseById(props) {
  const { ShowEditData, loading, updateCourse } = useContext(AdminContext);

  const [host, setHost] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    photo: "",
    body: "",
  });
  const { title, subtitle, photo, body } = data;
  useEffect(() => {
    (async function () {
      const res = await ShowEditData(
        props.match.params.course,
        props.match.params.id
      );
      setData(res.data);
      setHost(res.image);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const UpdateFormData = (e) => {
    e.preventDefault();
    const updateData = new FormData();
    updateData.append("collection", props.match.params.course);
    updateData.append("id", props.match.params.id);
    updateData.append("title", title);
    updateData.append("subtitle", subtitle);
    updateData.append("image", image);
    updateData.append("body", body);
    updateCourse(updateData,props.match.params.course,props.match.params.id);
    ////ShowEditData(props.match.params.course,props.match.params.id)
  };
  
  return (
    <div className="container">
      {" "}
      {!loading ? (
        <form onSubmit={UpdateFormData} encType="multipart/form-data">
          {" "}
          <div className="form-group">
            {" "}
            <label> Title: </label>{" "}
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              onChange={updateChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            {" "}
            <label> Sub Title: </label>{" "}
            <input
              type="text"
              name="subtitle"
              className="form-control"
              value={subtitle}
              onChange={updateChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            {" "}
            <label> Image </label>{" "}
            <img src={host + photo} alt="CourseImage" data-toggle="modal"
              data-target="#exampleModal"></img>{" "}

            <div className="modal fade imagebody"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog"
                role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">
                        ×
                          </span>
                    </button>
                  </div>


                  <div className="modal-body imagebody">
                    <img src={host + photo} className="i" alt="update" />
                  </div>

                  <div className="modal-footer imagebody">
                    
                      <button type="button"
                      className="btn btn-danger"
                      data-dismiss="modal">
                      Close
                      </button>
                  </div>
                </div>
              </div>
            </div>



            <br/>
            <label> Update New Image </label>{" "}
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />{" "}
          </div>{" "}
          <div className="form-group">
            {" "}
            <label> Body: </label>{" "}
            <textarea
              rows="10"
              name="body"
              className="form-control textArea"
              value={body}
              onChange={updateChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            {" "}
            <input type="submit" className="btn btn-primary" />{" "}
          </div>{" "}
        </form>
      ) : (
          <div className="loader">
            {" "}
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />{" "}
          </div>
        )}{" "}
    </div>
  );
}

export default EditCourseById;
