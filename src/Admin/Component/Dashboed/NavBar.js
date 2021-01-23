import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import "./Style/NavBar.css";
const NavBar = (props) => {

    const {admin,logout,ClearError} = useContext(AuthContext);  
    const Logout = () => {
        logout();
        ClearError();
    }
    const {url} = useRouteMatch();
    return (
            <nav className="navbar navbar-expand-md sticky-top">
                <Link to="/AdminHome" className="navbar-brand">
                Dashboards 
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to={url} className="nav-item nav-link active col-md" id="a">Home</Link>
                        <Link to={`${url}/Course-list`} className="nav-item nav-link col-md" id="a">Courses</Link>
                        <Link to="About" className="nav-item nav-link col-md" id="a">About</Link>
                    </div>
                </div>
                <div className="ml-auto collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <div className="nav-item dropdown">
                    <img src={admin && admin.imageUrl} alt="admin" className="nav-link dropdown-toggle" data-toggle="dropdown"></img>
                    <div className="dropdown-menu">
                        <Link to="/Profile" className="dropdown-item">Profile</Link>
                        <Link to="/Debasis" className="dropdown-item" onClick={Logout}>LogOut</Link>
                    </div>
                </div>
                </div>
            </nav>
    )
}

export default NavBar
