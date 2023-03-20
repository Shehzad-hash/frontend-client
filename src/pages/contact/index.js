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
import "../../style/plugins/landing.css";

const Contact = () => {
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

<div id="preloader">
</div> */}

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

      {/* <!-- ==================== End Navbar ==================== --> */}

      {/* <!-- ==================== Start header ==================== --> */}

      <header class="pages-header circle-bg valign position-re sub-bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-md-11">
              <div class="capt">
                <div class="text-center">
                  <h1 class="color-font mb-10 fw-700">
                    Are we missing
                    <br /> a Prop Firm?
                  </h1>
                  <p>Contact us for promotions and feature content</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="circle-color">
          <div class="gradient-circle"></div>
          <div class="gradient-circle two"></div>
        </div>
      </header>

      {/* <!-- ==================== End header ==================== --> */}

      {/* <!-- ==================== Start main-content ==================== --> */}

      <div class="main-content">
        {/* <!-- ==================== Start Contact ==================== --> */}

        <section class="contact section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="form md-mb50">
                  <h4 class="fw-700 color-font mb-50">Send us a message</h4>

                  <form id="contact-form" method="post" action="contact.php">
                    <div class="messages"></div>

                    <div class="controls">
                      <div class="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>

                      <div class="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>

                      <button type="submit" class="butn dark">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <div class="cont-info">
                  <h4 class="fw-700 color-font mb-50">Contact Info.</h4>
                  <h3 class="wow" data-splitting>
                    Email
                  </h3>
                  <div class="item mb-40">
                    <h5>
                      <a href="#0">affiliates@eastontech.net</a>
                    </h5>
                    <h5></h5>
                  </div>
                  <h3 class="wow" data-splitting>
                    Adress
                  </h3>
                  <div class="item mb-40">
                    <h5>
                      <a href="#0">Miami, FL, United States</a>
                    </h5>
                    <h5></h5>
                  </div>
                  <div class="social mt-50">
                    <a href="#0" class="icon">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#0" class="icon">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#0" class="icon">
                      <i class="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="#0" class="icon">
                      <i class="fa-brands fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ==================== End Contact ==================== --> */}

        {/* <!-- ==================== Start Map ==================== --> */}

        {/* <!-- ==================== End Map ==================== --> */}

        {/* <!-- ==================== Start Footer ==================== --> */}

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="item md-mb50">
                  <div class="title">
                    <h5>Contact Us</h5>
                  </div>
                  <ul>
                    <li>
                      <span class="icon">
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <div class="cont">
                        <h6>Email Us</h6>
                        <p>affiliates@eastontech.net</p>
                      </div>
                    </li>
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
              <div class="col-lg-4">
                <div class="item">
                  <div class="logo">
                    <img src="img/logo-light.png" alt="" />
                  </div>
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
                  <div class="copy-right">
                    <p>© 2023, Prop Firm Journal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- ==================== End Footer ==================== --> */}
      </div>

      {/* <!-- ==================== End main-content ==================== --> */}
    </>
  );
};

export default Contact;
