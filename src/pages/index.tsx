import styles from './variables.module.scss'
import {Banner} from "../components/Banner";
import {BannerCardProps, ListCard} from "../components/ListCard";
import {CardProps} from "../components/Card";

const defaultData: CardProps[] = [
  {
    image:'https://product.hstatic.net/1000075078/product/1665655231_cloudfee-roasted-almond_fd7f9778e1814e81bc049f991ffacf60.jpg',
    name:'CloudFee Hạnh Nhân Nướng',
    price: 49000,
    id:'chnn',
    slug:'cloudfee-hanh-nhan-nuong'
  },
  {
    image:'https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_d490c8fe35bd4380a9cb68e4fb5bfbf3_large.jpg',
    name:'The Coffee House Sữa Đá',
    price: 39000,
    id:'chnn',
    slug:'cloudfee-hanh-nhan-nuong'
  },
  {
    image:'https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_14bd90ca341f48fdab4d8d68bddc985c_large.jpg',
    name:'Hi-Tea Vải',
    price: 49000,
    id:'chnn',
    slug:'cloudfee-hanh-nhan-nuong'
  },
  {
    image:'https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_0953b015871e47e383ec458a109ae8eb_large.jpg',
    name:'Bánh Mì VN Thịt Nguội',
    price: 35000,
    id:'chnn',
    slug:'cloudfee-hanh-nhan-nuong'
  }
]

const banner: BannerCardProps = {
  image:'https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg',
  name:'Bánh Mì VN Thịt Nguội',
  price: 0,
  id:'chnn',
  slug:'cloudfee-hanh-nhan-nuong',
  link:'/collections/cloudtea'
}

export default function Home() {
  return (
    <div className={styles.home}>
      <Banner />
      <div className={styles.container}>
        <ListCard cardData={defaultData} banner={banner}/>
      </div>
    </div>
  )
}
