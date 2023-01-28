import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from './variables.module.scss'
import Slider from "react-slick";
import Link from "next/link";

export interface SliderItem {
  image: string
  navigate: string
}

export interface SliderProps {
  data: SliderItem[]
}

type DotType = string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined

export const SliderCustom = ({ data } : SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots: DotType) => (
      <div
        style={{
          position:"absolute",
          bottom:10,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div style={{
        width:16,
        height:2,
        backgroundColor: "#fff"
      }}></div>
    )
  };

  // @ts-ignore
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {
          data.map((item, index) => {
            return <Link href={item.navigate} key={index.toString()}  className={styles.sliderItem}>
              <img className={styles.sliderImage} alt={''} src={item.image}/>
            </Link>
          })
        }
      </Slider>
    </div>
  )
}
