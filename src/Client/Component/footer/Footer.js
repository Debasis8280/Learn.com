import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
            {/* <!-- Site footer --> */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Learn.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Learn.com focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL , Algorithm and more.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="/">C</a></li>
                                <li><a href="/">UI Design</a></li>
                                <li><a href="/">PHP</a></li>
                                <li><a href="/">Java</a></li>
                                <li><a href="/">Android</a></li>
                                <li><a href="/">Templates</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Contribute</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by  <a href="/">Learn.com</a>.
            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="/twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="/dribbble"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="/linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
