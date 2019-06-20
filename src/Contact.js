import React from 'react'
import ReactDOM from 'react-dom'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <title>Kiddos - Free Bootstrap 4 Template by Colorlib</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet" />
                <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/aos.css" />
                <link rel="stylesheet" href="css/ionicons.min.css" />
                <link rel="stylesheet" href="css/flaticon.css" />
                <link rel="stylesheet" href="css/icomoon.css" />
                <link rel="stylesheet" href="css/style.css" />
                <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("images/bg_2.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 ftco-animate text-center">
                                <h1 className="mb-2 bread">Contact Us</h1>
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Contact <i className="ion-ios-arrow-forward" /></span></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info">
                            <div className="col-md-3 d-flex">
                                <div className="bg-light align-self-stretch box p-4 text-center">
                                    <h3 className="mb-4">Address</h3>
                                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light align-self-stretch box p-4 text-center">
                                    <h3 className="mb-4">Contact Number</h3>
                                    <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light align-self-stretch box p-4 text-center">
                                    <h3 className="mb-4">Email Address</h3>
                                    <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light align-self-stretch box p-4 text-center">
                                    <h3 className="mb-4">Website</h3>
                                    <p><a href="#">yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
                    <div className="container">
                        <div className="row d-flex align-items-stretch no-gutters">
                            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div id="map" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* loader */}
                <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
            </div>
        )
    }
}

// var NewComponent = React.createClass({
//   render: function() {
//     return (

//     );
//   }
// });

export default Contact 
