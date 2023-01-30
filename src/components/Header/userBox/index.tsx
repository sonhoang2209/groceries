import { useState } from "react";
import styles from "../variables.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";

const UserBox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const productList = useSelector((state: RootState) => state.cart.products);

  return (
    <div className={styles.userBox}>
      <div className={styles.userButton} onClick={() => setOpen(!open)}>
        <img
          src="images/icons/user.png"
          alt=""
          className={styles.userButtonIcon}
        />
        {open ? (
          <div className={styles.blockHidden}>
            <div className={styles.closeButton} onClick={() => setOpen(false)}>
              <img src="images/icons/close.svg" alt="" />
            </div>
            <Link href={"/login"} className={styles.link}>
              Login
            </Link>
            <Link href={"/login"} className={styles.link}>
              Tra cứu đơn hàng
            </Link>
          </div>
        ) : null}
      </div>
      <Link href={"/cart"} className={styles.link}>
        <div className={styles.userButton}>
          <img
            src="images/icons/cart.png"
            alt=""
            className={styles.userButtonIcon}
          />
          {productList.length > 0 ? (
            <div className={styles.number}>{productList.length}</div>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default UserBox;
