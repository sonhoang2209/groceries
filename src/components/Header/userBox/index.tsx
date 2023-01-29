import { useState } from "react";
import styles from "../variables.module.scss";
import Link from "next/link";

const UserBox = () => {
  const [open, setOpen] = useState<boolean>(false);
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
      <div className={styles.userButton}>
        <img
          src="images/icons/cart.png"
          alt=""
          className={styles.userButtonIcon}
        />
      </div>
    </div>
  );
};

export default UserBox;
