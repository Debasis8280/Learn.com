import React from 'react'
import "./Navbar.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import logo from "../../../image/logo.jpg";
const Navbar = () => {
    document.title = "Welcome To Learn";
    return (
        <div className="nabWithSite">
        <div className="site">
            <a href="/">
            <img src={logo} alt="logo" className="logoh"></img>
                Learn
                <span>.com</span>
            </a>
        </div>
        <div id="cientNav">
            <nav className="navbar navbar-expand-md " >
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="logo" className="logo"></img>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" style={{ display:"none" }}>
                    <span className="navbar-toggler-icon "></span>
                </button>
               
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/" className="nav-item nav-link active col-md" id="a">Home</a>
                        <a href="/Courses" className="nav-item nav-link col-md" id="a">Courses</a>
                        <a href="/About" className="nav-item nav-link col-md" id="a">About</a>
                    </div>
                </div>
                <div className="ml-auto collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/facebook" className="nav-item nav-link" id="media"><FacebookIcon/></a>
                        <a href="/twitter" className="nav-item nav-link" id="media"><TwitterIcon/></a>
                        <a href="/github" className="nav-item nav-link" id="media"><GitHubIcon/></a>
                    </div>
                </div>                
            </nav> 
        </div>
        <div className="smallScreenData">
            <div style={{ display:"flex" }}>
                <div>
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="logo" className="logo"></img>
                    </a>
                </div>
                <div  id="navData" >
                    <a href="/" className="nav-item nav-link active col-md" id="a">Home</a>
                    <a href="/Courses" className="nav-item nav-link col-md" id="a">Courses</a>
                    <a href="/About" className="nav-item nav-link col-md" id="a">About</a>
                </div>
            </div>
            <div className="navMedia">
                <a href="/facebook" className="nav-item nav-link" id="media"><FacebookIcon/></a>
                <a href="/twitter" className="nav-item nav-link" id="media"><TwitterIcon/></a>
                <a href="/github" className="nav-item nav-link" id="media"><GitHubIcon/></a>
            </div>
        </div>

        </div>
    )
}

export default Navbar
