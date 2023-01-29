import { useCallback, useEffect, useState } from "react";
import { getProductById } from "../../../services/products";
import styles from "../products.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import Link from "next/link";

const Product = () => {
  const [productDetail, setProduct] = useState<any>(
    useSelector((state: RootState) => state.products.product)
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const [option, setOption] = useState<boolean>(false);

  const onChangeQuantity = (type: "plus" | "minus") => {
    setQuantity(type === "plus" ? quantity + 1 : quantity - 1);
  };

  const onChecked = (type: "size" | "option", value: boolean) => {
    if (type === "size") {
      setSize(value);
    } else {
      setOption(value);
    }
  };

  const fetchSituation = useCallback(async () => {
    try {
      await Promise.all([getProductById(1)]).then(([response]) => {
        setProduct(response.data.product[0]);
      });
    } catch (e) {}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!productDetail) fetchSituation().then();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let newTotal = productDetail.price;
    if (size) newTotal = newTotal + 6000;
    if (option) newTotal = newTotal + 10000;

    setTotal(newTotal * quantity);
  }, [productDetail, quantity, size, option]);

  if (!productDetail) return null;

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.flexBox}>
          <div className={styles.box}>
            <div className={styles.thumbnail}>
              <Link href={`/products/${productDetail.slug}`}>
                <img
                  className={styles.image}
                  src={productDetail.image}
                  alt={""}
                />
              </Link>
            </div>
            <p>{productDetail.description}</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.title}>
              {productDetail.product_name ||
                productDetail.localize ||
                productDetail.name}
            </h1>
            <div className={styles.boxPrice}>
              <span>
                {productDetail.price?.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <div className={styles.boxNumber}>
                <button
                  className={styles.iconButton}
                  onClick={() => onChangeQuantity("minus")}
                  disabled={quantity === 1}
                >
                  <img src={"/images/icons/minus.svg"} alt={""} />
                </button>
                <span>{quantity}</span>
                <button
                  className={styles.iconButton}
                  onClick={() => onChangeQuantity("plus")}
                >
                  <img src={"/images/icons/plus.svg"} alt={""} />
                </button>
              </div>
            </div>
            <div className={styles.boxOptions}>
              <div className={styles.boxOptionHeader}>CHỌN SIZE (BẮT BUỘC)</div>
              <div className={styles.boxOptionContent}>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    size nho +0
                    <input
                      type="radio"
                      name="size"
                      defaultChecked
                      onChange={() => onChecked("size", false)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    size vua +6.000
                    <input
                      type="radio"
                      name="size"
                      onChange={() => onChecked("size", true)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
              </div>
              <div className={styles.boxOptionHeader}>
                CHỌN TOPPING (CHỌN 1)
              </div>
              <div className={styles.boxOptionContent}>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    Không
                    <input
                      type="radio"
                      name="topping"
                      defaultChecked
                      onChange={() => onChecked("option", false)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    Kem Phô Mai Macchiato + 10.000
                    <input
                      type="radio"
                      name="topping"
                      onChange={() => onChecked("option", true)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    Trân châu trắng + 10.000
                    <input
                      type="radio"
                      name="topping"
                      onChange={() => onChecked("option", true)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    Caramel + 10.000
                    <input
                      type="radio"
                      name="topping"
                      onChange={() => onChecked("option", true)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <label className={styles.radioCustom}>
                    Thạch Cà Phê + 10.000
                    <input
                      type="radio"
                      name="topping"
                      onChange={() => onChecked("option", true)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
              </div>
            </div>
            <button className={styles.orderButton}>
              <span>
                {total.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>{" "}
              - Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
