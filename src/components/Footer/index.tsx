const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="noi-dung about">
          <h2>Về Chúng Tôi</h2>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium dolores alias ipsa vel hic tempore exercitationem ipsam
            explicabo repudiandae ut consectetur qui, earum at nostrum
            perspiciatis asperiores necessitatibus facilis esse. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quia id possimus
            quibusdam nihil earum in provident enim animi commodi quisquam!
            Molestiae cupiditate mollitia pariatur error ea, debitis eaque quo
            dolorum.
          </p>
          <ul className="social-icon">
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="noi-dung links">
          <h2>Đường Dẫn</h2>
          <ul>
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>
              <a href="#">Về Chúng Tôi</a>
            </li>
            <li>
              <a href="#">Thông Tin Liên Lạc</a>
            </li>
            <li>
              <a href="#">Dịch Vụ</a>
            </li>
            <li>
              <a href="#">Điều Kiện Chính Sách</a>
            </li>
          </ul>
        </div>
        <div className="noi-dung contact">
          <h2>Thông Tin Liên Hệ</h2>
          <ul className="info">
            <li>
              <span>
                <i className="fa fa-map-marker"></i>
              </span>
              <span>
                Đường Số 1<br />
                Quận Bắc Từ Liêm, Hà Nội, Việt Nam
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <p>
                <a href="#">+84 363 368 565</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope"></i>
              </span>
              <p>
                <a href="#">sonhoang.epu@gmail.com</a>
              </p>
            </li>
            <li>
              <form className="form">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Đăng Ký Subscribe Email"
                />
                <button type="button" className="btn btn--primary  uppercase">
                  Gửi
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
