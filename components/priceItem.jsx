import { Link } from 'next/link';
export default function PriceItem({ item }) {
  return (
    <div style={{ marginBottom: '20px' }} className="col-sm-6 col-md-4">
      <div className="news-item">
        <div className={`col-data ${item.priceDATE}`}>
          <div className="top">
            <div>
              <div className="img-combo"></div>
              <div className="price">
                <p>
                  Tốc độ <b>{item.priceBW}</b>Mbps {item.priceNOITICE}
                </p>
                <span />
                <p>
                  Cước <b>{item.priceDSMONTH}</b>
                </p>
                <span>vnđ/tháng</span>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="row-content">
              <ul>
                <li>{item.pageINFO}</li>
              </ul>
            </div>
            <div className="row-content">
              <ul>
                <li>
                  Download/ Upload{' '}
                  <b style={{ color: 'red' }}>{item.priceBW}</b> Mbps
                </li>
                <li>
                  Tốc độ truy cập Internet{' '}
                  <b style={{ color: 'red' }}>{item.priceBWQT}</b>
                </li>
              </ul>
            </div>
            <div className="row-content">
              <ul>
                <li>Thiết bị modem mặc định:</li>
                <li>AC1000C 2 băng tần 5Ghz + Unifi</li>
                <li>Điều chỉnh thiết bị theo nhu cầu KH</li>
              </ul>
            </div>
            <div className="row-content">
              <ul>
                <li>
                  Giá chỉ từ <b style={{ color: 'red' }}>{item.priceDSMONTH}</b>
                  vnđ/1 tháng
                </li>
                <li>Miễn phí lắp đặt</li>
                <li>Trang bị 2 modem internet, wifi</li>
              </ul>
            </div>
            <div className="row-content">
              <ul>
                <li>Lắp đặt trong vòng 2h</li>
                <li>Hỗ trợ kỹ thuật 24/7</li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <p>
              Mức giá trên đã bao gồm VAT. Trang thiết bị chúng tôi sẽ cung cấp
              khác nhau tùy vào nhu cầu sử dụng của Khách Hàng
            </p>
            <br />
            <a
              style={{ marginTop: '0px' }}
              className="btndathang"
              href="tel:0935966950"
            >
              Gọi Điện
            </a>
            <a href={`/dang-ky?giftcode=${item.priceURL}`}>Đăng Ký</a>
          </div>
        </div>
      </div>
    </div>
  );
}
