import { useState } from "react";
import styles from "../variables.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { removeToCart } from "../../stores/cartSlice";

const Cart = () => {
  const dispacth = useDispatch();
  const [productList, setProductList] = useState<any>(
    useSelector((state: RootState) => state.cart.products) || []
  );

  const handleRemoveToCart = (item: any) => {
    dispacth(removeToCart(item));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cart</h1>
        <div className={styles.listShop}>
          <div className={styles.boxCart}>
            {productList.map((item: any, index: number) => (
              <div key={index} className={styles.cartWrap}>
                <div className={styles.thumb}>
                  <img alt="" src={item.image} />
                </div>
                <div className={styles.shopInfo}>
                  <div className={styles.info}>
                    <h3>
                      {item.product_name} {item.size}{" "}
                      {item?.topping ? `thêm ${item.topping}` : ""}
                    </h3>
                    <p>
                      {item.newPrice.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                  <div>
                    <h3>Quantity: {item.quantity}</h3>
                    <p>
                      Total:{" "}
                      <span style={{ color: "red" }}>
                        {(item.newPrice * item.quantity).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className={styles.closeButton}
                  onClick={() => handleRemoveToCart(item)}
                >
                  <img src="images/icons/trash.png" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
