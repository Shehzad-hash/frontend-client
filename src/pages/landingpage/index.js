import React from "react";
import "../../style/plugins/animate.css";
import "../../style/plugins/animate.min.css";
import "../../style/plugins/bootstrap.min.css";
import "../../style/plugins/flaticon.css";
import "../../style/plugins/fontawesome-all.min.css";
import "../../style/plugins/ionicons.min.css";
import "../../style/plugins/justifiedGallery.min.css";
import "../../style/plugins/magnific-popup.css";
import "../../style/plugins/pe-icon-7-stroke.css";
import "../../style/plugins/slick-theme.css";
import "../../style/plugins/slick.css";
import "../../style/plugins/swiper.min.css";
import "../../style/plugins/YouTubePopUp.css";
import "./landing.css";

const Landing = () => {
  return (
    <>
      {/* <!-- ==================== Start Loading ==================== --> */}

      {/* <div class="loading">
        <span>P</span>
        <span>R</span>
        <span>O</span>
        <span>P</span>
        <span>F</span>
        <span>I</span>
        <span>R</span>
        <span>M</span>
        <span>J</span>
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>N</span>
        <span>A</span>
        <span>L</span>
      </div>

      <div id="preloader"></div> */}

      {/* <!-- ==================== End Loading ==================== --> */}

      {/* <!-- ==================== Start progress-scroll-button ==================== --> */}

      <div class="progress-wrap cursor-pointer">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* <!-- ==================== End progress-scroll-button ==================== --> */}

      {/* <!-- ==================== Start cursor ==================== --> */}

      <div class="mouse-cursor cursor-outer"></div>
      <div class="mouse-cursor cursor-inner"></div>

      {/* <!-- ==================== End cursor ==================== --> */}

      {/* <!-- ==================== Start Navbar ==================== --> */}

      <nav class="navbar navbar-expand-lg light">
        <div class="container">
          {/* <!-- Logo --> */}
          <a class="logo" href="#">
            <img src="/img/Logowhite.png" alt="logo" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar">
              <i class="fas fa-bars"></i>
            </span>
          </button>

          {/* <!-- navbar links --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index3.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="showcase3.html">
                  Top Firms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog-grid.html">
                  News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- ==================== End Navbar ==================== --> */}

      {/* <!-- ==================== Start Slider ==================== --> */}

      <header class="slider-stwo valign position-re">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="img">
                <img src="/img/slid/Hero_Image_PFJ.png" alt="" />
              </div>
            </div>
            <div class="col-lg-7 valign">
              <div class="cont">
                <div class="sub-title mb-5">
                  <h6>Integrated Technology</h6>
                </div>
                <h1 class="mb-10 fw-600">
                  Too many Prop Firms. <br /> We make it easy for you.
                </h1>
                <p>
                  Use our integrated dashboard to find the perfect program
                  across +20 top Prop Firms
                </p>
                <ul>
                  <li>
                    <a href="#0" class="butn dark curve mt-30">
                      <span>Start Now</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ==================== End Slider ==================== --> */}

      <div class="line bottom left"></div>

      {/* <!-- ==================== Start Services ==================== --> */}

      <section class="services bords lficon section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-head  text-center">
                <h6 class="wow fadeIn" data-wow-delay=".5s">
                  Key Metrics
                </h6>
                <h3 class="wow color-font">We track what is important</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
              <div class="item-box">
                <div>
                  <span class="icon">
                    <i class="fa-solid fa-fill-drip"></i>
                  </span>
                </div>
                <div class="cont">
                  <h6>Drawdown & Targets</h6>
                  <p>Profit Targets and Loss Limits</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
              <div class="item-box">
                <div>
                  <span class="icon">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </span>
                </div>
                <div class="cont">
                  <h6>Price & Scaling Plans</h6>
                  <p>How much you have to pay, and how much can you can get</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
              <div class="item-box">
                <div>
                  <span class="icon">
                    <i class="fa-solid fa-display"></i>
                  </span>
                </div>
                <div class="cont">
                  <h6>Support Care</h6>
                  <p>Rating and Support offered</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
              <div class="item-box">
                <div>
                  <span class="icon">
                    <i class="fa-regular fa-floppy-disk"></i>
                  </span>
                </div>
                <div class="cont">
                  <h6>Trading Restrictions</h6>
                  <p>Trading styles allowed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==================== End Services ==================== --> */}

      {/* <!-- ==================== Start about ==================== --> */}

      <div class="about section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="img">
                <img src="/img/slid/highlights.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1 valign">
              <div class="content">
                <div class="sub-title">
                  <h6>About Us</h6>
                </div>
                <h3 class="main-title wow" data-splitting>
                  Your trusted source.
                </h3>
                <p class="wow txt" data-splitting>
                  We are the Prop Firm Journal. Your main data source on the
                  Prop Firm Industry. We developed a dashboard for you to
                  explore, compare, and find the perfect Trading Program.
                </p>
                <div class="ftbox mt-30">
                  <ul>
                    <li class="wow fadeIn" data-wow-delay=".3s">
                      <span class="icon color-font">
                        <i class="fa-solid fa-bolt"></i>
                      </span>
                      <h6>
                        At Hand
                        <br /> Data
                      </h6>
                      <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                    <li class="space wow fadeIn" data-wow-delay=".5s">
                      <span class="icon color-font">
                        <i class="fa-solid fa-fill-drip"></i>
                      </span>
                      <h6>
                        Easy
                        <br /> Design
                      </h6>
                      <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                    <li class="wow fadeIn" data-wow-delay=".8s">
                      <span class="icon color-font">
                        <i class="fa-solid fa-medal"></i>
                      </span>
                      <h6>
                        Top Companies
                        <br /> Selected
                      </h6>
                      <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==================== End about ==================== --> */}

      {/* <!-- ==================== Start Works ==================== --> */}

      <section class="work-carousel section-padding caroul position-re pb-0">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-head  text-center">
                <h6 class="wow fadeIn" data-wow-delay=".5s">
                  Most voted
                </h6>
                <h3 class="wow color-font">
                  Top Challenges
                  <br />
                </h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 no-padding">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        class="item-img bg-img wow imago"
                        data-background="/img/portfolio/curs/tft.jpg"
                      ></div>
                      <div class="cont bgbox">
                        <h6>
                          <a href="project-details2.html">2 Step Evaluation</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">
                            The Funded Trader - Royal Program
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        class="item-img bg-img wow imago"
                        data-background="/img/portfolio/curs/mff.jpg"
                      ></div>
                      <div class="cont bgbox">
                        <h6>
                          <a href="project-details2.html">2 Step Evaluation</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">
                            My Forex Funds - Evaluation
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        class="item-img bg-img wow imago"
                        data-background="/img/portfolio/curs/tft.jpg"
                      ></div>
                      <div class="cont bgbox">
                        <h6>
                          <a href="project-details2.html">1 Step Evaluation</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">
                            The Funded Trader - Knight Challenge
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        class="item-img bg-img wow imago"
                        data-background="/img/portfolio/curs/mffx.jpg"
                      ></div>
                      <div class="cont bgbox">
                        <h6>
                          <a href="project-details2.html">2 Step Evaluation</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">
                            My Funded Fx - Challenge
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        class="item-img bg-img wow imago"
                        data-background="/img/portfolio/curs/ftuk.jpg"
                      ></div>
                      <div class="cont bgbox">
                        <h6>
                          <a href="project-details2.html">Instant Funding</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">FTUK</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- slider setting --> */}
                <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                  <i class="ion-ios-arrow-right"></i>
                </div>
                <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                  <i class="ion-ios-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==================== End Works ==================== --> */}

      {/* <!-- ==================== Start block-sec ==================== --> */}

      <section class="block-sec section-padding">
        <div class="container">
          <div class="number-sec">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="item md-mb50">
                  <span class="icon color-font">
                    <i class="fa-regular fa-face-smile"></i>
                  </span>
                  <h3 class="custom-font">
                    <span class="count">+140</span>
                  </h3>
                  <p class="wow txt" data-splitting>
                    Analyzed Programs
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="item md-mb50">
                  <span class="icon color-font">
                    <i class="fa-solid fa-briefcase"></i>
                  </span>
                  <h3 class="custom-font">
                    <span class="count">+20</span>
                  </h3>
                  <p class="wow txt" data-splitting>
                    Compared Prop Firms
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="item sm-mb50">
                  <span class="icon color-font">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                  </span>
                  <h3 class="custom-font">
                    <span class="count">+30</span>
                  </h3>
                  <p class="wow txt" data-splitting>
                    Key Metrics
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="item">
                  <span class="icon color-font">
                    <i class="fa-solid fa-medal"></i>
                  </span>
                  <h3 class="custom-font">
                    <span class="count">10</span>
                  </h3>
                  <p class="wow txt" data-splitting>
                    Top Firms Selected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==================== End block-sec ==================== --> */}

      {/* <!-- ==================== Start testimonials ==================== --> */}
      {/* <!--  */}
      {/* <section class="testimonials section-padding back-color">
        <div class="container-fluid position-re">
          <div class="row wow fadeInUp" data-wow-delay=".5s">
            <div class="col-lg-12">
              <div class="slic-item">
                <div class="item">
                  <div class="info valign">
                    <div class="cont">
                      <div class="author">
                        <div class="img">
                          <img src="img/clients/1.jpg" alt="" />
                        </div>
                        <h6 class="author-name color-font">Alex Regelman</h6>
                        <span class="author-details">Co-founder, Colabrio</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click & Collect’ service.
                  </p>
                </div>
                <div class="item">
                  <div class="info valign">
                    <div class="cont">
                      <div class="author">
                        <div class="img">
                          <img src="img/clients/1.jpg" alt="" />
                        </div>
                        <h6 class="author-name color-font">Alex Regelman</h6>
                        <span class="author-details">Co-founder, Colabrio</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click & Collect’ service.
                  </p>
                </div>
                <div class="item">
                  <div class="info valign">
                    <div class="cont">
                      <div class="author">
                        <div class="img">
                          <img src="img/clients/1.jpg" alt="" />
                        </div>
                        <h6 class="author-name color-font">Alex Regelman</h6>
                        <span class="author-details">Co-founder, Colabrio</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click & Collect’ service.
                  </p>
                </div>
                <div class="item">
                  <div class="info valign">
                    <div class="cont">
                      <div class="author">
                        <div class="img">
                          <img src="img/clients/1.jpg" alt="" />
                        </div>
                        <h6 class="author-name color-font">Alex Regelman</h6>
                        <span class="author-details">Co-founder, Colabrio</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click & Collect’ service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="arrows">
            <div class="container">
              <div class="next cursor-pointer">
                <span class="pe-7s-angle-right"></span>
              </div>
              <div class="prev cursor-pointer">
                <span class="pe-7s-angle-left"></span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* --> */}
      {/* <!-- ==================== End testimonials ==================== --> */}

      {/* <!-- ==================== Start Team ==================== --> */}

      <div class="team-crv section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 valign">
              <div class="content wow fadeInUp md-mb30" data-wow-delay=".5s">
                <div class="sub-title">
                  <h6>Sponsored</h6>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3 class="co-tit mb-15">FundedNext Challenge</h3>
                <p>
                  FundedNext offers up to $200,000 funds to financially empower
                  global traders and help them earn full-time.
                </p>
                <div class="skills-box mt-40">
                  <div class="skill-item">
                    <h6 class="custom-font">Customer Satisfaction</h6>
                    <div class="skill-progress">
                      <div class="progres" data-value="92%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <h6 class="custom-font">Trustpilot 5-Stars</h6>
                    <div class="skill-progress">
                      <div class="progres" data-value="85%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="img-box">
                <div class="row">
                  <div class="col-sm-6 toright">
                    <div class="full-width">
                      <div
                        class="img sizxl mb-30"
                        data-tooltip-tit="Jayzee Aluke"
                        data-tooltip-sub="CEO"
                      >
                        <img
                          src="/img/team/FundeNexceo.jpg"
                          alt=""
                          class="imago wow"
                        />
                      </div>
                      <div
                        class="img sizmd"
                        data-tooltip-tit="For iOS and Android"
                        data-tooltip-sub="Own Mobile App"
                      >
                        <img
                          src="/img/team/funnextapp.jpg"
                          alt=""
                          class="imago wow"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 toleft valign">
                    <div class="full-width text-left">
                      <div
                        class="img sizmd mb-30"
                        data-tooltip-tit="For Evaluationd and Express models"
                        data-tooltip-sub="200K Accounts"
                      >
                        <img
                          src="/img/team/100k.jpg"
                          alt=""
                          class="imago wow"
                        />
                      </div>
                      <div
                        class="img sizsm"
                        data-tooltip-tit="Based on the UAE and USA"
                        data-tooltip-sub="Headquarters"
                      >
                        <img
                          src="/img/team/fnoffice.jpg"
                          alt=""
                          class="imago wow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==================== End Team ==================== --> */}

      {/* <!-- ==================== Start Blog ==================== --> */}

      <section class="blog-grid section-padding position-re">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-head text-center">
                <h6 class="wow fadeIn" data-wow-delay=".5s">
                  Prop Firms News
                </h6>
                <h3 class="wow color-font">Stay up to date</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div
                class="item bg-img"
                data-background="/img/blog/tft-knights.jpg"
              >
                <div class="cont">
                  <a href="#0" class="date">
                    <span>
                      <i>06</i> Aug 2019
                    </span>
                  </a>
                  <div class="info">
                    <a href="#0" class="author">
                      <span>by / Admin</span>
                    </a>
                    <a href="#0" class="tag">
                      <span>TFT</span>
                    </a>
                  </div>
                  <h6>
                    <a href="#0">TFT Launches the Knight's Challenge</a>
                  </h6>
                  <div class="btn-more">
                    <a href="#0" class="simple-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
              <div
                class="item active bg-img"
                data-background="/img/blog/mffvip.jpg"
              >
                <div class="cont">
                  <a href="#0" class="date">
                    <span>
                      <i>06</i> Aug 2019
                    </span>
                  </a>
                  <div class="info">
                    <a href="#0" class="author">
                      <span>by / Admin</span>
                    </a>
                    <a href="#0" class="tag">
                      <span>MFF</span>
                    </a>
                  </div>
                  <h6>
                    <a href="#0">Know My Forex Funds' VIP program</a>
                  </h6>
                  <div class="btn-more">
                    <a href="#0" class="simple-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
              <div
                class="item bg-img"
                data-background="/img/blog/proptrader1.jpg"
              >
                <div class="cont">
                  <a href="#0" class="date">
                    <span>
                      <i>06</i> Aug 2019
                    </span>
                  </a>
                  <div class="info">
                    <a href="#0" class="author">
                      <span>by / Admin</span>
                    </a>
                    <a href="#0" class="tag">
                      <span>Tips</span>
                    </a>
                  </div>
                  <h6>
                    <a href="#0">3 Tips to succed as a Prop Trader</a>
                  </h6>
                  <div class="btn-more">
                    <a href="#0" class="simple-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sec-head text-center">
            <br />
            <br />
            <br />
            <a href="blog-grid.html">
              <h6 class="wow fadeIn" data-wow-delay=".5s">
                More News
              </h6>
            </a>
          </div>
        </div>
        <div class="line top right"></div>
        <div class="line bottom left"></div>
      </section>

      {/* <!-- ==================== End Blog ==================== --> */}

      {/* <!-- ==================== Start call-to-action ==================== --> */}

      <section
        class="call-action section-padding bg-img"
        data-background="img/patrn.svg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-9">
              <div class="content sm-mb30">
                <h6 class="wow" data-splitting>
                  Use our dashboard
                </h6>
                <h2 class="wow" data-splitting>
                  Find your <br /> <b class="back-color">Prop Firm</b>.
                </h2>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 valign">
              <a
                href="contact.html"
                class="butn dark curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Dashboard</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==================== End call-to-action ==================== --> */}

      {/* <!-- ==================== Start Footer ==================== --> */}

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="item">
                <div class="logo">
                  <img src="/img/favicon-white.jpg" alt="Logo" />
                </div>
                <div class="copy-right">
                  <p>© 2023, Prop Firm Journal.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item md-mb50">
                <div class="title">
                  <h5>Follow Us</h5>
                </div>
                <ul>
                  <div class="social">
                    <a href="#0">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#0">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#0">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item md-mb50">
                <div class="title">
                  <h5>Subscribe</h5>
                </div>
                <ul>
                  <li>
                    <div class="subscribe">
                      <input type="text" placeholder="Type Your Email" />
                      <span class="subs">
                        <i class="fa-regular fa-paper-plane"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- ==================== End Footer ==================== --> */}
    </>
  );
};

export default Landing;
