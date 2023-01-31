import { useState } from "react";
import styles from "../variables.module.scss";
import { Button } from "../../components/Buttons";

const Shops = () => {
  const [productList, setProductList] = useState<any>([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginWrap}>
          <h1 className={styles.title}>login</h1>
          <input name={"username"} type={"text"} placeholder={"Username"} />
          <input name={"password"} type={"password"} placeholder={"Password"} />
          <button>Login</button>
          <div className={styles.infoRow} style={{ textAlign: "center" }}>
            <a href={"#"}>Quên mật khẩu</a>
          </div>
          <div className={styles.line} />
          <div className={styles.infoRow}>
            Bạn mới biết đến Shopee?
            <a style={{ color: "#fa8c16", marginLeft: 4 }} href={"#"}>
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
