export default function PriceItem({ item }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-9">
      <div className="pricing-item mb-30">
        <div className="pricing-thumb">
          <img src="netbox/pricing_thumb01.jpg" alt="img not found" />
          <h3 className="title">Internet For Personal</h3>
          <div className="net-speed">
            <h5>
              {item.priceBW} <span>MBPS</span>
            </h5>
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
          <div className="price-wrap">
            <span>Start From</span>
            <h3 className="price">
              {item.priceDSMONTH}
              <sub>/Month</sub>
            </h3>
          </div>
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
