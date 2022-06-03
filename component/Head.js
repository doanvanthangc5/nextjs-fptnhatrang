export default function Heading() {
  return (
    <header id="header">
      <nav className="navbar navbar-fixed-top">
        <div className="lunar-head">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <div id="navheader" className="searcha fa fa-reorder"></div>
              </button>
              <a className="navbar-brand" href="/">
                <span className="logo">
                  <img
                    src="/stat/images/logo-fptplay.png"
                    alt="FPT TELECOM - NHA TRANG"
                  />
                </span>
              </a>
              <div
                className="searcha fa fa-search"
                id="form-search"
                title="Tìm kiếm"
              >
                <a
                  className="sbtn search-submit2"
                  href="/tim-kiem"
                  title="Tìm kiếm"
                >
                  <i class="fa fa-search"></i>
                </a>
              </div>{' '}
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="imenu" title="Trang chủ fpt nha trang" href="/">
                    Trang chủ
                  </a>
                </li>

                <li>
                  <a
                    className="imenu"
                    title="Camera fpt nha trang"
                    href="/internet"
                  >
                    Internet Wifi
                  </a>
                </li>
                <li>
                  <a
                    className="imenu"
                    title="Camera fpt nha trang"
                    href="/fptplay"
                  >
                    Truyền Hình
                  </a>
                </li>
                <li>
                  <a
                    className="imenu"
                    title="Camera fpt nha trang"
                    href="/camera"
                  >
                    Camera
                  </a>
                </li>
                <li>
                  <a
                    className="imenu"
                    title="Camera fpt nha trang"
                    href="/show"
                  >
                    Tin Tức
                  </a>
                </li>
                <li>
                  <div
                    className="searcha fa fa-search"
                    id="searcha"
                    title="Tìm kiếm"
                    style={{ fontSize: '24px' }}
                  >
                    <a
                      className="sbtn search-submit2"
                      href="/tim-kiem"
                      title="Tìm kiếm"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="/dang-ky" className="buynow">
                    Đăng ký
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
