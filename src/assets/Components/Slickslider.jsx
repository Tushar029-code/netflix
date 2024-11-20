import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movie1 from "../../images/movie1.webp";
export default function Slickslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };
  return (
    <>
      <div className="w-[100%] overflow-hidden ">
        <div className="max-w-[1170px]">
          <div className="bg-black ps-4  ">
            <Slider {...settings}>
              <div>
                <img src={movie1} className="rounded-xl" alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
              <div>
                <img src={movie1} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
