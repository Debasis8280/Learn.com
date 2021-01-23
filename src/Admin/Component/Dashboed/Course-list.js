/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../Context/AdminOperation/AdminContext";
import { Link } from "react-router-dom";
import "./Style/Course-list.css";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    width: 345,
    // height:300,
    float: "left",
    margin: 10,
    // position:'relative'
  },
  media: {
    height: 140,
  },
});

function Course() {
  const {
    createCollection,
    getCollection,
    collections,
    deleteCollections,
    loading,
  } = useContext(AdminContext);
  document.title = "Course List";
  const [data, setData] = useState({ collection: "", courseName: "" });

  const [image, setImage] = useState();

  const { collection, courseName } = data;


  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onImage = (e) => {
    setImage(e.target.files[0]);
  };

  const AddCourse = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("collections", collection);
    formData.append("courseName", courseName);
    formData.append("image", image);
    createCollection(formData);
  };
  const focus = () => {
    toast.warn("Warning!:Collection Name Must Be LowerCase and Plural");
  };
  useEffect(() => {
    getCollection();
  }, []);

  const deleteCollection = (deleteCollectionName) => {
    deleteCollections(deleteCollectionName);
  };
  const classes = useStyles();
  return (
    <div className=" course-list-main">
      <div className="row justify-content-end addCourse">
        <div className="addCourse">
          <button
            className="col-md-2 col-lg-2 col-lx-2"
            data-toggle="modal"
            data-target="#myModal"
          >
            Add New Course
        </button>
        </div>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Create Course Collection</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <form onSubmit={AddCourse} encType="multipart/form-data">
                <div className="modal-body">
                  <label>Collection:</label>
                  <input
                    type="text"
                    name="collection"
                    className="form-control"
                    onFocus={focus}
                    onChange={onChange}
                  />
                  <label>Course Name:</label>
                  <input
                    type="text"
                    name="courseName"
                    className="form-control"
                    onChange={onChange}
                  />
                  <label>Image:</label>
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    accept="image/*"
                    onChange={onImage}
                  />
                </div>

                <div className="modal-footer">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  ></input>
                  <input
                    type="reset"
                    className="btn btn-danger"
                    value="Reset"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="courseCard">
        {!loading ? (
          <div>
            {collections.map((data, key) => {
              return (
                <div key={key}>
                  <Card className={classes.root} >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={`https://learn-com-in.herokuapp.com/icon/${data.coursePhoto}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {data.courseName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {/* {collectionName[i]} */}
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
          </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link to={`Edit-Course/${data.collectionName}`} style={{ textDecoration: "none" }}>
                        <Button size="small" color="primary">
                          Edit
                </Button>
                      </Link>
                      <Link to={`Write-Course/${data.collectionName}`} style={{ textDecoration: "none" }}>
                        <Button size="small" color="primary">
                          Write
              </Button>
                      </Link>
                      <Button size="small" color="primary" onClick={() => { deleteCollection(data.collectionName) }}>
                        Delete Collection {data.collectionName}
                      </Button>
                    </CardActions>
                  </Card>

                </div>
              )
            })}
          </div>
        ) : (
            <Loader
              className="loader"
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs

            />
          )}
      </div>
    </div>
  );
}

export default Course;
