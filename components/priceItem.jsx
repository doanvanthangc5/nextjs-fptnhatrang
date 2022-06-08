export default function PriceItem({ item }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-9">
      <div className="pricing-item mb-30">
        <div className={`pricing-thumb ${item.priceDATE}`}>
          <div className="price">
            <p>
              Tốc độ <b>80</b>Mbps
              <a
                style={{
                  position: 'absolute',
                  marginTop: '-5px',
                  marginLeft: '0px',
                  background: 'url(./html-v2/images/uu-dai.png)',
                  height: '106px',
                  width: '104px',
                  left: '0px',
                }}
              />
            </p>
            <span />
            <p>
              Chỉ từ <b>215,000</b>
            </p>
            <span>vnđ/ tháng</span>
          </div>
        </div>
        <div className="pricing-content">
          <ul className="pricing-list">
            <li>
              <img src="../static/images/check.png" alt="img not found" />{' '}
              Single Device Uses
            </li>
            <li>
              <img src="../static/images/check.png" alt="img not found" /> Phone
              &amp; Computer
            </li>
            <li>
              <img src="../static/images/check.png" alt="img not found" />{' '}
              Random IP
            </li>
          </ul>
          <div className="pricing-btn">
            <a className="btn btn-link" href="/pricing">
              View Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
