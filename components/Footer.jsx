export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="container">
          <div className="row g-0">
            <div className="col-3">
              <div className="footer-widget">
                <div className="footer-contact">
                  <div className="footer-call">
                    <div className="icon">
                      <i />
                    </div>
                    <div className="content">
                      <span>Call us 24/7</span>
                      <h6 className="title">
                        <a href="tel:123">(987) 547587587</a>
                      </h6>
                    </div>
                  </div>
                  <h6 className="title">Contact info</h6>
                  <p>Street House, Greater London NW1 8JR, UK</p>
                  <div className="footer-social">
                    <a href="#">
                      <i />
                    </a>
                    <a href="#">
                      <i />
                    </a>
                    <a href="#">
                      <i />
                    </a>
                    <a href="#">
                      <i />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-widget">
                <div className="fw-title">
                  <h4 className="title">Categories</h4>
                </div>
                <ul className="fw-list">
                  <li>
                    <a href="/services-details">Laptops &amp; Computers</a>
                  </li>
                  <li>
                    <a href="/services-details">Home &amp; Life Style</a>
                  </li>
                  <li>
                    <a href="/services-details">Men's Fashion</a>
                  </li>
                  <li>
                    <a href="/services-details">Women's Fashion</a>
                  </li>
                  <li>
                    <a href="/services-details">Sport &amp; Gyms</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-widget">
                <div className="fw-title">
                  <h4 className="title">About Company</h4>
                </div>
                <ul className="fw-list">
                  <li>
                    <a href="/about">About Company</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/contact">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/contact">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/contact">Mission &amp; Vision</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1">
              <div className="footer-widget">
                <div className="fw-title">
                  <h4 className="title">Service Schedule</h4>
                </div>
                <ul className="fw-schedule-list">
                  <li>
                    Saturday - Sunday - Mon <span>8:30 AM - 10 PM</span>
                  </li>
                  <li>
                    Tuesday - Wed - Thurs <span>9:30 AM - 12 PM</span>
                  </li>
                  <li>
                    Friday : <span className="close">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="footer-logo">
                <a href="/">
                  <img src="netbox/w_logo.png" alt="img not found" />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="copyright-text text-center text-md-end">
                <p>Copyrighted by @Bdevs - All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
