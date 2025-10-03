import React from "react";
import Slider from "react-slick";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const BannerSlider = () => {
  const banner = [
    { id: 1, img: `${p1}` },
    { id: 2, img: `${p2}` },
    { id: 3, img: `${p3}` },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full r overflow-hidden ">
      <Slider {...settings}>
        {banner.map((banner) => (
          <div key={banner.id} className="relative">
            <img
              src={banner.img}
              alt="Form banner"
              className="w-full h-90 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Fresh from farms to your doorstep
              </h2>
              <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
