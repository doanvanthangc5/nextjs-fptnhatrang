export default function Heading() {
  return (
    <header>
      <div id="sticky-header" className="menu-area sticky-menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i>1231</i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <a href="/">
                      <img src="netbox/logo.png" alt="img not found" />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li>
                        <a href="/contact">Contact2</a>
                      </li>
                      <li>
                        <a href="/contact">Contact3</a>
                      </li>
                      <li>
                        <a href="/contact">Contact4</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-btn">
                        <a className="btn transparent-btn" href="/contact">
                          Get a Quote
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fix">
        <div className="side-info">
          <button className="side-info-close">
            <i />
          </button>
          <div className="side-info-content">
            <div className="mm-menu">
              <ul>
                <li className="has-droupdown">
                  <a>Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">Home Style 1</a>
                    </li>
                    <li>
                      <a href="/home-2">Home Style 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="has-droupdown">
                  <a>Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/service-details">Services Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a>Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/blog-details">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a>Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/team">Our Team</a>
                    </li>
                    <li>
                      <a href="/faq">Faq</a>
                    </li>
                    <li>
                      <a href="/shop">Our Shop</a>
                    </li>
                    <li>
                      <a href="/shop-details">Shop Details</a>
                    </li>
                    <li>
                      <a href="/error">Error</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="contact-infos mb-30">
              <div className="contact-list mb-30">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <i /> broklyn street road, New York
                  </li>
                  <li>
                    <i /> info@example.com
                  </li>
                  <li>
                    <i /> Opening Time : 10: AM - 10 PM
                  </li>
                </ul>
                <div className="sidebar__menu--social">
                  <a href="#" target="_blank">
                    <i />
                  </a>
                  <a href="#" target="_blank">
                    <i />
                  </a>
                  <a href="#" target="_blank">
                    <i />
                  </a>
                  <a href="#" target="_blank">
                    <i />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay" />
    </header>
  );
}
