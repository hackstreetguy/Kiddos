import React from "react"
import Header from "./updown/header"
import Footer from "./updown/footer"
function App() {
	return (
		<div>
			<title>Kiddos</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Fredericka+the+Great"
				rel="stylesheet"
			/>
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
			{/* <div className="py-2 bg-primary">
				<div className="container">
					<div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
						<div className="col-lg-12 d-block">
							<div className="row d-flex">
								<div className="col-md-5 pr-4 d-flex topper align-items-center">
									<div className="icon bg-fifth mr-2 d-flex justify-content-center align-items-center">
										<span className="icon-map" />
									</div>
									<span className="text">
										198 West 21th Street, Suite 721 New York NY 10016
              </span>
								</div>
								<div className="col-md pr-4 d-flex topper align-items-center">
									<div className="icon bg-secondary mr-2 d-flex justify-content-center align-items-center">
										<span className="icon-paper-plane" />
									</div>
									<span className="text">youremail@email.com</span>
								</div>
								<div className="col-md pr-4 d-flex topper align-items-center">
									<div className="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center">
										<span className="icon-phone2" />
									</div>
									<span className="text">+ 1235 2355 98</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/* END nav */}
			<Header />
			<section className="home-slider owl-carousel">
				<div
					className="slider-item"
					style={{ backgroundImage: "url(images/bg_1.jpg)" }}
				>
					<div className="overlay" />
					<div className="container">
						<div
							className="row no-gutters slider-text align-items-center justify-content-center"
							data-scrollax-parent="true"
						>
							<div className="col-md-8 text-center ftco-animate">
								<h1 className="mb-4">
									Kids Are The Best <span>Explorers In The World</span>
								</h1>
								<p>
									<a
										href="#"
										className="btn btn-secondary px-4 py-3 mt-3"
									>
										Read More
              </a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="slider-item"
					style={{ backgroundImage: "url(images/bg_2.jpg)" }}
				>
					<div className="overlay" />
					<div className="container">
						<div
							className="row no-gutters slider-text align-items-center justify-content-center"
							data-scrollax-parent="true"
						>
							<div className="col-md-8 text-center ftco-animate">
								<h1 className="mb-4">
									Perfect Learned<span> For Your Child</span>
								</h1>
								<p>
									<a
										href="#"
										className="btn btn-secondary px-4 py-3 mt-3"
									>
										Read More
              </a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-services ftco-no-pb">
				<div className="container-wrap">
					<div className="row no-gutters">
						<div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary">
							<div className="media block-6 d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-teacher" />
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Certified Teachers</h3>
									<p>
										Even the all-powerful Pointing has no control about
										the blind texts it is an almost unorthographic.
              </p>
								</div>
							</div>
						</div>
						<div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary">
							<div className="media block-6 d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-reading" />
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Special Education</h3>
									<p>
										Even the all-powerful Pointing has no control about
										the blind texts it is an almost unorthographic.
              </p>
								</div>
							</div>
						</div>
						<div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth">
							<div className="media block-6 d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-books" />
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Book &amp; Library</h3>
									<p>
										Even the all-powerful Pointing has no control about
										the blind texts it is an almost unorthographic.
              </p>
								</div>
							</div>
						</div>
						<div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary">
							<div className="media block-6 d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-diploma" />
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Certification</h3>
									<p>
										Even the all-powerful Pointing has no control about
										the blind texts it is an almost unorthographic.
              </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-section ftco-no-pt ftc-no-pb">
				<div className="container">
					<div className="row">
						<div className="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
							<div className="text px-4 ftco-animate">
								<h2 className="mb-4">
									Welcome to Kiddos Learning School
            </h2>
								<p>
									On her way she met a copy. The copy warned the Little
									Blind Text, that where it came from it would have been
									rewritten a thousand times and everything that was left
									from its origin would be the word.
            </p>
								<p>
									Separated they live in Bookmarksgrove right at the coast
									of the Semantics, a large language ocean. A small river
									named Duden flows by their place and supplies it with
									the necessary regelialia. And if she hasn’t been
									rewritten, then they are still using her.
            </p>
								<p>
									<a href="#" className="btn btn-secondary px-4 py-3">
										Read More
              </a>
								</p>
							</div>
						</div>
						<div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
							<h2 className="mb-4">What We Offer</h2>
							<p>
								On her way she met a copy. The copy warned the Little
								Blind Text, that where it came from it would have been
								rewritten a thousand times and everything that was left
								from its origin would be the word.
          </p>
							<div className="row mt-5">
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
											<span className="flaticon-security" />
										</div>
										<div className="text">
											<h3>Safety First</h3>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia.
                  </p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
											<span className="flaticon-reading" />
										</div>
										<div className="text">
											<h3>Regular Classes</h3>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia.
                  </p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
											<span className="flaticon-diploma" />
										</div>
										<div className="text">
											<h3>Certified Teachers</h3>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia.
                  </p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
											<span className="flaticon-education" />
										</div>
										<div className="text">
											<h3>Sufficient Classrooms</h3>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia.
                  </p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
											<span className="flaticon-jigsaw" />
										</div>
										<div className="text">
											<h3>Creative Lessons</h3>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia.
                  </p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
											<span className="flaticon-kids" />
										</div>
										<div className="text">
											<h3>Sports Facilities</h3>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia.
                  </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="ftco-intro"
				style={{ backgroundImage: "url(images/bg_3.jpg)" }}
				data-stellar-background-ratio="0.5"
			>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<h2>Teaching Your Child Some Good Manners</h2>
							<p className="mb-0">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia. It is a
								paradisematic country, in which roasted parts of sentences
								fly into your mouth.
          </p>
						</div>
						<div className="col-md-3 d-flex align-items-center">
							<p className="mb-0">
								<a href="#" className="btn btn-secondary px-4 py-3">
									Take a Course
            </a>
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="ftco-section ftco-no-pb">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-2">
						<div className="col-md-8 text-center heading-section ftco-animate">
							<h2 className="mb-4">
								<span>Certified</span> Teachers
          </h2>
							<p>
								Separated they live in. A small river named Duden flows by
								their place and supplies it with the necessary regelialia.
								It is a paradisematic country
          </p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="staff">
								<div className="img-wrap d-flex align-items-stretch">
									<div
										className="img align-self-stretch"
										style={{
											backgroundImage: "url(images/teacher-1.jpg)"
										}}
									/>
								</div>
								<div className="text pt-3 text-center">
									<h3>Bianca Wilson</h3>
									<span className="position mb-2">Teacher</span>
									<div className="faded">
										<p>
											I am an ambitious workaholic, but apart from that,
											pretty simple person.
                </p>
										<ul className="ftco-social text-center">
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-twitter" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-facebook" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-google-plus" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-instagram" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="staff">
								<div className="img-wrap d-flex align-items-stretch">
									<div
										className="img align-self-stretch"
										style={{
											backgroundImage: "url(images/teacher-2.jpg)"
										}}
									/>
								</div>
								<div className="text pt-3 text-center">
									<h3>Mitch Parker</h3>
									<span className="position mb-2">English Teacher</span>
									<div className="faded">
										<p>
											I am an ambitious workaholic, but apart from that,
											pretty simple person.
                </p>
										<ul className="ftco-social text-center">
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-twitter" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-facebook" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-google-plus" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-instagram" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="staff">
								<div className="img-wrap d-flex align-items-stretch">
									<div
										className="img align-self-stretch"
										style={{
											backgroundImage: "url(images/teacher-3.jpg)"
										}}
									/>
								</div>
								<div className="text pt-3 text-center">
									<h3>Stella Smith</h3>
									<span className="position mb-2">Art Teacher</span>
									<div className="faded">
										<p>
											I am an ambitious workaholic, but apart from that,
											pretty simple person.
                </p>
										<ul className="ftco-social text-center">
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-twitter" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-facebook" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-google-plus" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-instagram" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="staff">
								<div className="img-wrap d-flex align-items-stretch">
									<div
										className="img align-self-stretch"
										style={{
											backgroundImage: "url(images/teacher-4.jpg)"
										}}
									/>
								</div>
								<div className="text pt-3 text-center">
									<h3>Monshe Henderson</h3>
									<span className="position mb-2">Science Teacher</span>
									<div className="faded">
										<p>
											I am an ambitious workaholic, but apart from that,
											pretty simple person.
                </p>
										<ul className="ftco-social text-center">
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-twitter" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-facebook" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-google-plus" />
												</a>
											</li>
											<li className="ftco-animate">
												<a href="#">
													<span className="icon-instagram" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-2">
						<div className="col-md-8 text-center heading-section ftco-animate">
							<h2 className="mb-4">
								<span>Our</span> Facilities
          </h2>
							<p>
								Separated they live in. A small river named Duden flows by
								their place and supplies it with the necessary regelialia.
								It is a paradisematic country
          </p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 course d-lg-flex ftco-animate">
							<div
								className="img"
								style={{ backgroundImage: "url(images/course-1.jpg)" }}
							/>
							<div className="text bg-light p-4">
								<h3>
									<a href="#">Arts Lesson</a>
								</h3>
								<p className="subheading">
									<span>Class time:</span> 9:00am - 10am
            </p>
								<p>
									Separated they live in. A small river named Duden flows
									by their place and supplies it with the necessary
									regelialia. It is a paradisematic country
            </p>
							</div>
						</div>
						<div className="col-md-6 course d-lg-flex ftco-animate">
							<div
								className="img"
								style={{ backgroundImage: "url(images/course-2.jpg)" }}
							/>
							<div className="text bg-light p-4">
								<h3>
									<a href="#">Language Lesson</a>
								</h3>
								<p className="subheading">
									<span>Class time:</span> 9:00am - 10am
            </p>
								<p>
									Separated they live in. A small river named Duden flows
									by their place and supplies it with the necessary
									regelialia. It is a paradisematic country
            </p>
							</div>
						</div>
						<div className="col-md-6 course d-lg-flex ftco-animate">
							<div
								className="img"
								style={{ backgroundImage: "url(images/course-3.jpg)" }}
							/>
							<div className="text bg-light p-4">
								<h3>
									<a href="#">Music Lesson</a>
								</h3>
								<p className="subheading">
									<span>Class time:</span> 9:00am - 10am
            </p>
								<p>
									Separated they live in. A small river named Duden flows
									by their place and supplies it with the necessary
									regelialia. It is a paradisematic country
            </p>
							</div>
						</div>
						<div className="col-md-6 course d-lg-flex ftco-animate">
							<div
								className="img"
								style={{ backgroundImage: "url(images/course-4.jpg)" }}
							/>
							<div className="text bg-light p-4">
								<h3>
									<a href="#">Sports Lesson</a>
								</h3>
								<p className="subheading">
									<span>Class time:</span> 9:00am - 10am
            </p>
								<p>
									Separated they live in. A small river named Duden flows
									by their place and supplies it with the necessary
									regelialia. It is a paradisematic country
            </p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="ftco-section ftco-counter img"
				id="section-counter"
				style={{ backgroundImage: "url(images/bg_4.jpg)" }}
				data-stellar-background-ratio="0.5"
			>
				<div className="container">
					<div className="row justify-content-center mb-5 pb-2">
						<div className="col-md-8 text-center heading-section heading-section-black ftco-animate">
							<h2 className="mb-4">
								<span>20 Years of</span> Experience
          </h2>
							<p>
								Separated they live in. A small river named Duden flows by
								their place and supplies it with the necessary regelialia.
								It is a paradisematic country
          </p>
						</div>
					</div>
					{/* <div className="row d-md-flex align-items-center justify-content-center">
						<div className="col-lg-10">
							<div className="row d-md-flex align-items-center">
								<div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18">
										<div className="icon">
											<span className="flaticon-doctor" />
										</div>
										<div className="text">
											<strong className="number" data-number={18}>
												0
                  </strong>
											<span>Certified Teachers</span>
										</div>
									</div>
								</div>
								<div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18">
										<div className="icon">
											<span className="flaticon-doctor" />
										</div>
										<div className="text">
											<strong className="number" data-number={351}>
												0
                  </strong>
											<span>Successful Kids</span>
										</div>
									</div>
								</div>
								<div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18">
										<div className="icon">
											<span className="flaticon-doctor" />
										</div>
										<div className="text">
											<strong className="number" data-number={564}>
												0
                  </strong>
											<span>Happy Parents</span>
										</div>
									</div>
								</div>
								<div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18">
										<div className="icon">
											<span className="flaticon-doctor" />
										</div>
										<div className="text">
											<strong className="number" data-number={300}>
												0
                  </strong>
											<span>Awards Won</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</section>
			{/* <section className="ftco-section testimony-section bg-light">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-2">
						<div className="col-md-8 text-center heading-section ftco-animate">
							<h2 className="mb-4">
								<span>What Parents</span> Says About Us
          </h2>
							<p>
								Separated they live in. A small river named Duden flows by
								their place and supplies it with the necessary regelialia.
								It is a paradisematic country
          </p>
						</div>
					</div>
					<div className="row ftco-animate justify-content-center">
						<div className="col-md-12">
							<div className="carousel-testimony owl-carousel">
								<div className="item">
									<div className="testimony-wrap d-flex">
										<div
											className="user-img mr-4"
											style={{
												backgroundImage: "url(images/teacher-1.jpg)"
											}}
										/>
										<div className="text ml-2 bg-light">
											<span className="quote d-flex align-items-center justify-content-center">
												<i className="icon-quote-left" />
											</span>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia and Consonantia, there live
												the blind texts.
                  </p>
											<p className="name">Racky Henderson</p>
											<span className="position">Father</span>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testimony-wrap d-flex">
										<div
											className="user-img mr-4"
											style={{
												backgroundImage: "url(images/teacher-2.jpg)"
											}}
										/>
										<div className="text ml-2 bg-light">
											<span className="quote d-flex align-items-center justify-content-center">
												<i className="icon-quote-left" />
											</span>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia and Consonantia, there live
												the blind texts.
                  </p>
											<p className="name">Henry Dee</p>
											<span className="position">Mother</span>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testimony-wrap d-flex">
										<div
											className="user-img mr-4"
											style={{
												backgroundImage: "url(images/teacher-3.jpg)"
											}}
										/>
										<div className="text ml-2 bg-light">
											<span className="quote d-flex align-items-center justify-content-center">
												<i className="icon-quote-left" />
											</span>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia and Consonantia, there live
												the blind texts.
                  </p>
											<p className="name">Mark Huff</p>
											<span className="position">Mother</span>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testimony-wrap d-flex">
										<div
											className="user-img mr-4"
											style={{
												backgroundImage: "url(images/teacher-4.jpg)"
											}}
										/>
										<div className="text ml-2 bg-light">
											<span className="quote d-flex align-items-center justify-content-center">
												<i className="icon-quote-left" />
											</span>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia and Consonantia, there live
												the blind texts.
                  </p>
											<p className="name">Rodel Golez</p>
											<span className="position">Mother</span>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testimony-wrap d-flex">
										<div
											className="user-img mr-4"
											style={{
												backgroundImage: "url(images/teacher-1.jpg)"
											}}
										/>
										<div className="text ml-2 bg-light">
											<span className="quote d-flex align-items-center justify-content-center">
												<i className="icon-quote-left" />
											</span>
											<p>
												Far far away, behind the word mountains, far from
												the countries Vokalia and Consonantia, there live
												the blind texts.
                  </p>
											<p className="name">Ken Bosh</p>
											<span className="position">Mother</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<section
				className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
				style={{ backgroundImage: "url(images/bg_5.jpg)" }}
				data-stellar-background-ratio="0.5"
			>
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-md-6 py-5 px-md-5 bg-primary">
							<div className="heading-section heading-section-white ftco-animate mb-5">
								<h2 className="mb-4">Request A Quote</h2>
								<p>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there live the blind
									texts.
            </p>
							</div>
							<form action="#" className="appointment-form ftco-animate">
								<div className="d-md-flex">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="First Name"
										/>
									</div>
									<div className="form-group ml-md-4">
										<input
											type="text"
											className="form-control"
											placeholder="Last Name"
										/>
									</div>
								</div>
								<div className="d-md-flex">
									<div className="form-group">
										<div className="form-field">
											<div className="select-wrap">
												<div className="icon">
													<span className="ion-ios-arrow-down" />
												</div>
												<select name id className="form-control">
													<option value>Select Your Course</option>
													<option value>Art Lesson</option>
													<option value>Language Lesson</option>
													<option value>Music Lesson</option>
													<option value>Sports</option>
													<option value>Other Services</option>
												</select>
											</div>
										</div>
									</div>
									<div className="form-group ml-md-4">
										<input
											type="text"
											className="form-control"
											placeholder="Phone"
										/>
									</div>
								</div>
								<div className="d-md-flex">
									<div className="form-group">
										<textarea
											name
											id
											cols={30}
											rows={2}
											className="form-control"
											placeholder="Message"
											defaultValue={""}
										/>
									</div>
									<div className="form-group ml-md-4">
										<input
											type="submit"
											defaultValue="Request A Quote"
											className="btn btn-secondary py-3 px-4"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>



			{/* <section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-2">
						<div className="col-md-8 text-center heading-section ftco-animate">
							<h2 className="mb-4">
								<span>Our</span> Pricing
          </h2>
							<p>
								Separated they live in. A small river named Duden flows by
								their place and supplies it with the necessary regelialia.
								It is a paradisematic country
          </p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="pricing-entry bg-light pb-4 text-center">
								<div>
									<h3 className="mb-3">Basic</h3>
									<p>
										<span className="price">$24.50</span>{" "}
										<span className="per">/ 5mos</span>
									</p>
								</div>
								<div
									className="img"
									style={{ backgroundImage: "url(images/bg_1.jpg)" }}
								/>
								<div className="px-4">
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
								</div>
								<p className="button text-center">
									<a href="#" className="btn btn-primary px-4 py-3">
										Take A Course
              </a>
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="pricing-entry bg-light pb-4 text-center">
								<div>
									<h3 className="mb-3">Standard</h3>
									<p>
										<span className="price">$34.50</span>{" "}
										<span className="per">/ 5mos</span>
									</p>
								</div>
								<div
									className="img"
									style={{ backgroundImage: "url(images/bg_2.jpg)" }}
								/>
								<div className="px-4">
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
								</div>
								<p className="button text-center">
									<a href="#" className="btn btn-secondary px-4 py-3">
										Take A Course
              </a>
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="pricing-entry bg-light active pb-4 text-center">
								<div>
									<h3 className="mb-3">Premium</h3>
									<p>
										<span className="price">$54.50</span>{" "}
										<span className="per">/ 5mos</span>
									</p>
								</div>
								<div
									className="img"
									style={{ backgroundImage: "url(images/bg_3.jpg)" }}
								/>
								<div className="px-4">
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
								</div>
								<p className="button text-center">
									<a href="#" className="btn btn-tertiary px-4 py-3">
										Take A Course
              </a>
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="pricing-entry bg-light pb-4 text-center">
								<div>
									<h3 className="mb-3">Platinum</h3>
									<p>
										<span className="price">$89.50</span>{" "}
										<span className="per">/ 5mos</span>
									</p>
								</div>
								<div
									className="img"
									style={{ backgroundImage: "url(images/bg_5.jpg)" }}
								/>
								<div className="px-4">
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
								</div>
								<p className="button text-center">
									<a href="#" className="btn btn-quarternary px-4 py-3">
										Take A Course
              </a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-section bg-light">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-2">
						<div className="col-md-8 text-center heading-section ftco-animate">
							<h2 className="mb-4">
								<span>Recent</span> Blog
          </h2>
							<p>
								Separated they live in. A small river named Duden flows by
								their place and supplies it with the necessary regelialia.
								It is a paradisematic country
          </p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-4 ftco-animate">
							<div className="blog-entry">
								<a
									href="blog-single.html"
									className="block-20 d-flex align-items-end"
									style={{ backgroundImage: 'url("images/image_1.jpg")' }}
								>
									<div className="meta-date text-center p-2">
										<span className="day">27</span>
										<span className="mos">January</span>
										<span className="yr">2019</span>
									</div>
								</a>
								<div className="text bg-white p-4">
									<h3 className="heading">
										<a href="#">Skills To Develop Your Child Memory</a>
									</h3>
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
									<div className="d-flex align-items-center mt-4">
										<p className="mb-0">
											<a href="#" className="btn btn-secondary">
												Read More{" "}
												<span className="ion-ios-arrow-round-forward" />
											</a>
										</p>
										<p className="ml-auto mb-0">
											<a href="#" className="mr-2">
												Admin
                  </a>
											<a href="#" className="meta-chat">
												<span className="icon-chat" /> 3
                  </a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 ftco-animate">
							<div className="blog-entry">
								<a
									href="blog-single.html"
									className="block-20 d-flex align-items-end"
									style={{ backgroundImage: 'url("images/image_2.jpg")' }}
								>
									<div className="meta-date text-center p-2">
										<span className="day">27</span>
										<span className="mos">January</span>
										<span className="yr">2019</span>
									</div>
								</a>
								<div className="text bg-white p-4">
									<h3 className="heading">
										<a href="#">Skills To Develop Your Child Memory</a>
									</h3>
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
									<div className="d-flex align-items-center mt-4">
										<p className="mb-0">
											<a href="#" className="btn btn-secondary">
												Read More{" "}
												<span className="ion-ios-arrow-round-forward" />
											</a>
										</p>
										<p className="ml-auto mb-0">
											<a href="#" className="mr-2">
												Admin
                  </a>
											<a href="#" className="meta-chat">
												<span className="icon-chat" /> 3
                  </a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 ftco-animate">
							<div className="blog-entry">
								<a
									href="blog-single.html"
									className="block-20 d-flex align-items-end"
									style={{ backgroundImage: 'url("images/image_3.jpg")' }}
								>
									<div className="meta-date text-center p-2">
										<span className="day">27</span>
										<span className="mos">January</span>
										<span className="yr">2019</span>
									</div>
								</a>
								<div className="text bg-white p-4">
									<h3 className="heading">
										<a href="#">Skills To Develop Your Child Memory</a>
									</h3>
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the
										blind texts.
              </p>
									<div className="d-flex align-items-center mt-4">
										<p className="mb-0">
											<a href="#" className="btn btn-secondary">
												Read More{" "}
												<span className="ion-ios-arrow-round-forward" />
											</a>
										</p>
										<p className="ml-auto mb-0">
											<a href="#" className="mr-2">
												Admin
                  </a>
											<a href="#" className="meta-chat">
												<span className="icon-chat" /> 3
                  </a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<section className="ftco-gallery">
				<div className="container-wrap">
					<div className="row no-gutters">
						<div className="col-md-3 ftco-animate">
							<a
								href="images/image_1.jpg"
								className="gallery image-popup img d-flex align-items-center"
								style={{ backgroundImage: "url(images/course-1.jpg)" }}
							>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram" />
								</div>
							</a>
						</div>
						<div className="col-md-3 ftco-animate">
							<a
								href="images/image_2.jpg"
								className="gallery image-popup img d-flex align-items-center"
								style={{ backgroundImage: "url(images/image_2.jpg)" }}
							>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram" />
								</div>
							</a>
						</div>
						<div className="col-md-3 ftco-animate">
							<a
								href="images/image_3.jpg"
								className="gallery image-popup img d-flex align-items-center"
								style={{ backgroundImage: "url(images/image_3.jpg)" }}
							>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram" />
								</div>
							</a>
						</div>
						<div className="col-md-3 ftco-animate">
							<a
								href="images/image_4.jpg"
								className="gallery image-popup img d-flex align-items-center"
								style={{ backgroundImage: "url(images/image_4.jpg)" }}
							>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* loader */}
			<div id="ftco-loader" className="show fullscreen">
				<svg className="circular" width="48px" height="48px">
					<circle
						className="path-bg"
						cx={24}
						cy={24}
						r={22}
						fill="none"
						strokeWidth={4}
						stroke="#eeeeee"
					/>
					<circle
						className="path"
						cx={24}
						cy={24}
						r={22}
						fill="none"
						strokeWidth={4}
						strokeMiterlimit={10}
						stroke="#F96D00"
					/>
				</svg>
			</div>
			<Footer />
		</div>

	)
}

export default App
