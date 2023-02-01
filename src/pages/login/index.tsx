import { useCallback, useState } from "react";
import styles from "../variables.module.scss";
import { login } from "../../services/user";
import { useRouter } from "next/dist/client/router";
import { setCookie } from "cookies-next";

const Shops = () => {
  const router = useRouter();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = useCallback(async () => {
    setError("");
    try {
      const { data } = await login(username, password);
      if (data.success) {
        setCookie("token", "token");
        return router.push("/");
      } else setError("Tài khoản mật khẩu không chính xác");
    } catch (e) {
      console.log(e);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginWrap}>
          <h1 className={styles.title}>login</h1>
          <input
            name={"username"}
            type={"text"}
            placeholder={"Username"}
            onChange={(e: any) => setUserName(e.target?.value)}
          />
          <input
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            onChange={(e: any) => setPassword(e.target?.value)}
          />
          <span style={{ fontSize: 12, color: "red" }}>{error}</span>
          <button disabled={!username || !password} onClick={handleLogin}>
            Login
          </button>
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
