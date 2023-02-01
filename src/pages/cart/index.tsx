import { useEffect, useState } from "react";
import styles from "../variables.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { removeToCart } from "../../stores/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState) => state.cart.products);
  const [allTotal, setAllTotal] = useState<any>(0);

  const handleRemoveToCart = (item: any) => {
    dispatch(removeToCart(item));
  };

  const handleOrder = () => {
    console.log("a");
  };

  useEffect(() => {
    let total: any = 0;
    productList.forEach((item: any) => {
      total = total + item.newPrice * item.quantity;
    });
    setAllTotal(total);
  }, [productList]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title} style={{ justifyContent: "center" }}>
          Cart
        </h1>
        <div className={styles.listCart}>
          <div className={styles.boxCart}>
            {!productList?.length ? (
              <div style={{ textAlign: "center" }}>
                Không có sản phẩm nào, vui lòng chọn món.
              </div>
            ) : (
              productList.map((item: any, index: number) => (
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
                          {(item.newPrice * item.quantity).toLocaleString(
                            "vi",
                            {
                              style: "currency",
                              currency: "VND",
                            }
                          )}
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
              ))
            )}
          </div>
          <div className={styles.boxInfo}>
            <div className={styles.infoRow}>
              <div style={{ width: "35%" }}></div>
              <div className={styles.infoRow} style={{ width: "60%" }}>
                <span style={{ minWidth: 125 }}>Shops Voucher</span>
                <span style={{ color: "#05a", fontSize: 13 }}>
                  Chọn Hoặc Nhập Mã
                </span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <div style={{ width: "35%" }}>
                số sản phẩm : {productList.length}
              </div>
              <div className={styles.infoRow} style={{ width: "60%" }}>
                <span style={{ minWidth: 125 }}>Tổng thanh toán: </span>
                <span style={{ color: "red", fontSize: 20 }}>
                  {allTotal.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                <button disabled={!productList.length} onClick={handleOrder}>
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
