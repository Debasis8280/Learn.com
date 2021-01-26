import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ClientContext from '../../Context/ClientContext';
import Loader from 'react-loader-spinner';
import "./css/welcomeData.css";
const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    float: 'left',
    margin: 20,
  },
  media: {
    height: 140,
  },
});
function WelcomData() {
  const classes = useStyles();
  const { sidebar, sidebarData, loading, collectionName } = useContext(ClientContext);
  useEffect(() => {
    sidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let i = 0;
  return (
    <div className="welcomeData">
      {!loading ? (
        <div className="content">
          {sidebarData.map((data, key) => {
            return (
              <a href={`/course/${data.courseName}/${collectionName[i]}`} key={key}>
                <Card className={classes.root} >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={`https://learn-backend.zeet.app/icon/${data.coursePhoto}`}
                      title={data.courseName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className="cardTitle" style={{ textAlign: "center" }}>
                        {data.courseName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <span className="increment">{i++}</span>
                </Card>
              </a>
            )
          })}

        </div>)
        : (
          <div className="loader">
            {console.log("Debasis")}
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

export default WelcomData
