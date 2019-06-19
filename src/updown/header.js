import React from "react";
// import "../css/open-iconic-bootstrap.min.css"
// import "../css/animate.css"
// import "../css/owl.carousel.min.css"
// import '../css/owl.theme.default.min.css'
// import '../css/magnific-popup.css'
// import '../css/aos.css'
// import '../css/icomoon.css'
// import './..css/flaticon.css'
// import './..css/ionicons.min.css'
// import "../css/style.css"
import { Link } from "../../node_modules/react-dom";

import Contact from "../Contact"

function Header() {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900"
                rel="stylesheet"
            />
            <a
                href="https://fonts.googleapis.com/css?family=Fredericka+the+Great"
                rel="stylesheet"
            > </a>
            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />
            <link rel="stylesheet" href="css/aos.css" />
            <link rel="stylesheet" href="css/ionicons.min.css" />
            <link rel="stylesheet" href="css/flaticon.css" />
            <link rel="stylesheet" href="css/ionicons.css" />
            <link rel="stylesheet" href="css/style.css" />

            <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container d-flex align-items-center">
                    <a className="navbar-brand" href="index.html">
                        Kiddos
      </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu" /> Menu
      </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="index.html" className="nav-link pl-0">
                                    Home
            </a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About
            </a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="teacher.html" className="nav-link">
                                    Teacher
            </a>
                            </li> */}
                            <li className="nav-item">
                                <a href="Contact.js" className="nav-link">
                                    Courses
            </a>
                            </li>
                            <li className="nav-item">
                                <a href="pricing.html" className="nav-link">
                                    Gallery
            </a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">
                                    Blog
            </a>
                            </li>
                            <li className="nav-item">
                                <Link to="./../src/Contact.js">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Header;