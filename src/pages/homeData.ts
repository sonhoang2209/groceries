import { CardProps } from "../components/Card";
import { BannerCardProps } from "../components/ListCard";
import { HomeBlogProps } from "../components/HomeBlog";
import { BlogProps } from "../components/ListBlog";

export const defaultData: CardProps[] = [
  {
    image:
      "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_d490c8fe35bd4380a9cb68e4fb5bfbf3_large.jpg",
    name: "CloudFee Hạnh Nhân Nướng",
    price: 49000,
    id: "chnn",
    slug: "cloudfee-hanh-nhan-nuong",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_d490c8fe35bd4380a9cb68e4fb5bfbf3_large.jpg",
    name: "The Coffee House Sữa Đá",
    price: 39000,
    id: "chnn",
    slug: "cloudfee-hanh-nhan-nuong",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_14bd90ca341f48fdab4d8d68bddc985c_large.jpg",
    name: "Hi-Tea Vải",
    price: 49000,
    id: "chnn",
    slug: "cloudfee-hanh-nhan-nuong",
  },
  {
    image:
      "https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_0953b015871e47e383ec458a109ae8eb_large.jpg",
    name: "Bánh Mì VN Thịt Nguội",
    price: 35000,
    id: "chnn",
    slug: "cloudfee-hanh-nhan-nuong",
  },
];

export const banner: BannerCardProps = {
  image:
    "https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg",
  name: "Bánh Mì VN Thịt Nguội",
  price: 0,
  id: "chnn",
  slug: "cloudfee-hanh-nhan-nuong",
  link: "/collections/cloudtea",
};

export const homeBlockData: HomeBlogProps = {
  image:
    "https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png",
  title:
    "https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png",
  link: "collections/tea",
  content:
    "Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp giữ trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện, nhấp một ngụm là ghiền, nhớ mãi không thôi.",
};

export const blogListData: BlogProps[] = [
  {
    image:
      "//file.hstatic.net/1000075078/article/dscf0216_2890bcca44ae49aaaf843d5fa3db2fc6_grande.jpg",
    title:
      '“KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ LỠ MÙA TRUNG THU NÀY',
    link: "blogs/teaholic/khuay-de-thay-trang-trung-thu-nay",
    content:
      "Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè và người thân. Và trải nghiệm độc đáo “Khuấy để thấy trăng” của The Coffee House như khuấy lên niềm hạnh phúc, nao nức về một trung thu đầy thú vị mà không người trẻ nào muốn bỏ lỡ.",
    dateUpdate: "16/08/2022",
  },
  {
    image:
      "//file.hstatic.net/1000075078/article/hinh_cover_hero_c7bbff15ef674270ae8390da9c2be2ab_grande.jpg",
    title:
      '“KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ LỠ MÙA TRUNG THU NÀY',
    link: "blogs/teaholic/khuay-de-thay-trang-trung-thu-nay",
    content:
      "Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè và người thân. Và trải nghiệm độc đáo “Khuấy để thấy trăng” của The Coffee House như khuấy lên niềm hạnh phúc, nao nức về một trung thu đầy thú vị mà không người trẻ nào muốn bỏ lỡ.",
    dateUpdate: "16/08/2022",
  },
  {
    image:
      "//file.hstatic.net/1000075078/article/pr-cover_41de066c6f654ee9b318dbffe7e5e5f0_grande.jpg",
    title: "10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS",
    link: "blogs/teaholic/khuay-de-thay-trang-trung-thu-nay",
    content:
      "Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh thần thêm hứng khởi.",
    dateUpdate: "16/08/2022",
  },
];
