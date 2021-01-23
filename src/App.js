import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Admin/Component/Login/Login";
import AdminHome from "./Admin/Component/AdminHome";
import PrivateRoute from "./Admin/AdminPrivateRoute/PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./Admin/Context/AuthContext/AuthState";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./Client/Component/Welcome";
import ErrorPage from "./Client/Component/ErrorPager/ErrorPage";
import ClientState from "./Client/Context/ClientState";
import ShowCourseData from "./Client/Component/Welcome/ShowCourseData";
import Footer from "./Client/Component/footer/Footer";
function App() {
  return (
    <div className="main">
      <div>
      <AuthState>
      <ClientState>
          <Router>
            <Switch>
              <Route exact path="/" component={Welcome}></Route>
              {/* admin login */}
              <Route exact path="/Debasis" component={Login}></Route>
              {/* admin Home */}
              <PrivateRoute
                path="/AdminHome"
                component={AdminHome}
              ></PrivateRoute>

                {/* Client  */}
              <Route exact path="/course/:course/:collection" component={ShowCourseData}></Route>
              {/* <ShowCourseData/> */}
              <Route exact path="/title/:id" component={ShowCourseData}/>
              {/* error page */}
              <Route component={ErrorPage}></Route>
            </Switch>
          </Router>

          </ClientState>
        </AuthState>
      <ToastContainer />
      </div>
      <div className="footerDiv">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
