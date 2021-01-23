import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminContext from "../../Context/AdminOperation/AdminContext";
import "./Style/EditCourse.css";
import Loader from "react-loader-spinner";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import noImage from '../../image/noImage.png';
const useStyles = makeStyles({
  root: {
    width: 300,
    height:320,
    float:"left",
    margin:10
  },
  media: {
    height: 140,
  },
});

function EditCourse(props) {
  let {
    displayCourseData,
    getCourseData,
    image,
    searchCourse,
    searchData,
    error,
    loading,
    deleteCourseData
  } = useContext(AdminContext);
  useEffect(() => {
    getCourseData(props.match.params.course);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const [value, setValue] = useState("");
  const onSearch = async (e) => {
    e.preventDefault();
    setValue(e.target.value);
    searchCourse(e.target.value, props.match.params.course);
  };
  const deleteData = (collection, id) => {
    deleteCourseData(collection,id);
  }
  const classes = useStyles();
  return (
    <div className="editCourse">
      <div className="row justify-content-end">
        <input
          type="text"
          className="form-control search"
          placeholder="Type something to search"
          onChange={onSearch}
        />
      </div>
      {!loading ? (
        <div className="EditCardItem">
          {!value.length > 0 ? (
            <>
              {displayCourseData.map((data, key) => {
                return (
                  <div key={key}>
                    {!data.courseName ? (
                      <Card className={classes.root}>
                        <CardActionArea>
                        {data.photo ?(
                          <CardMedia
                            className={classes.media}
                            image={`${image}/${data.photo}`}
                            title="Contemplative Reptile"
                          />)
                          :(
                          <CardMedia
                            className={classes.media}
                            image={noImage}
                            title="Contemplative Reptile"
                          />)
                          }
                          
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.body.substring(0,50)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link to={`EditByID/${props.match.params.course}/${data._id}`} style={{ textDecoration:"none" }}>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                        </Link>
                          <Button size="small" color="primary" onClick={()=> deleteData(props.match.params.course,data._id)}>
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    ) : (
                        <Card className={classes.root}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={`http://localhost:8080/icon/${data.coursePhoto}`}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign:"center" }}>
                                  {data.courseName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontWeight:"bold",textAlign:"center" }}>
                                    It Course Introduction Data
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button size="small" color="primary" disabled={true}>
                                Edit
                              </Button>
                            </CardActions>
                          </Card>
                      )}
                  </div>
                );
              })}{" "}
            </>
          ) : (
              <div className="card cardContainer">
                {!error ? (
                  <>
                    {searchData.map((data, key) => {
                      return (
                        <Fragment key={key}>
                          {data ? (
                            <>
                              <img
                                src={image + data.photo}
                                className="card-img-top cardImage"
                                alt="..."
                              />
                              <div className="text-center card-body">
                                <h5 className="card-title">{data.title}</h5>

                                <Link
                                  to={`EditByID/${props.match.params.course + "/" + data._id
                                    }`}
                                  className="btn btn-primary"
                                >
                                  Edit
                              </Link>
                                <Link to="true" className="btn btn-primary">
                                  Delete
                              </Link>
                              </div>
                            </>
                          ) : (
                              "Debasis"
                            )}
                        </Fragment>
                      );
                    })}
                  </>
                ) : (
                    <div className="row justify-content-center error ">
                      <h1 className="text-danger col">{error.message}</h1>
                    </div>
                  )}
              </div>
            )}
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
  );
}
export default EditCourse;
