import { useCallback, useEffect, useState } from "react";
import styles from "../variables.module.scss";
import { getBrands } from "../../services/brands";

const Shops = () => {
  const [productList, setProductList] = useState<any>([]);
  const [search, setSearch] = useState<any>([]);
  const fetchSituation = useCallback(async () => {
    try {
      await Promise.all([getBrands()]).then(([response]) => {
        setProductList(response.data.brands);
      });
    } catch (e) {}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: any) => {
    console.log(e.target.value);

    const show = !e.target.value
      ? [...productList]
      : [
          ...productList.filter(
            (item: any) => item.name.toLowerCase().indexOf(e.target.value) > -1
          ),
        ];
    setSearch(show);
  };

  useEffect(() => {
    fetchSituation().then();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!productList) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Shops
          <div className={styles.boxSearch}>
            <input
              placeholder="Tên đường, tên cửa hàng"
              onChange={handleSearch}
            />
          </div>
        </h1>

        <div className={styles.listShop}>
          {search.map((item: any, index: number) => (
            <div key={index} className={styles.shopWrap}>
              <div className={styles.thumb}>
                <img alt="" src={item.photo} />
              </div>
              <div className={styles.shopInfo}>
                <h3>{item.name}</h3>
                <p>{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
