import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { useRef, useState } from "react";

const Skincare = () => {
  const [slidesToShow] = useState(4);
  const sliderRef = useRef(null);

  const data = [
    {
      img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
      name: "Natural Scrum",
      category: "Skincare",
      price: "100",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
      name: "Natural Scrum",
      category: "Skincare",
      price: "100",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
      name: "Natural Scrum",
      category: "Skincare",
      price: "100",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
      name: "Natural Scrum",
      category: "Skincare",
      price: "100",
    },
  ];

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-14 sm:py-16 px-5 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="header flex justify-between items-center flex-wrap gap-6">
            <div className="name">
              <h2 className="mb-2.5 playfair text-center text-4xl sm:text-5xl font-bold">
                Skincare
              </h2>
              <p className="h-0.5 w-16 bg-[#EC72AF]"></p>
            </div>

            <div className="slider_button flex flex-row">
              {/* left arrow */}
              <button
                onClick={previous}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-left "
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* right arrow */}
              <button
                onClick={next}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right "
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-8 sm:mt-12">
              <Slider ref={sliderRef} {...settings}>
                {data.map((data, index) => (
                  <div key={index} className="mx-5 pb-7">
                    <div className="mb-3 relative group w-60 pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                      <img
                        className="object-cover w-full h-56"
                        src={data.img}
                        alt="products"
                      />

                      <div className="py-5 text-center">
                        <h3 className="playfair mb-2 text-lg font-semibold text-gray-800">
                          {data.name}
                        </h3>

                        {/* STARS */}
                        <div className="mb-2 flex items-center justify-center gap-1">
                          <FaStar className="text-[#FFC107]" />
                          <FaStar className="text-[#FFC107]" />
                          <FaStar className="text-[#FFC107]" />
                          <FaStar className="text-[#FFC107]" />
                          <FaStar className="text-[#FFC107]" />
                        </div>

                        <p className="mb-3 text-md text-gray-500">
                          ({data.category})
                        </p>

                        <p className="mb-3 text-xl font-semibold text-black">
                          ${data.price}
                        </p>

                        <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skincare;
