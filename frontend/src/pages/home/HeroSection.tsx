import Button from "../../components/Button";

const HeroSection:React.FC = () => {
  return (
    <>
      <section className="w-full ">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row bg-[#FDEDF5]">
          {/* IMAGE SECTION */}
          <div className="img_side min-w-[50%]">
            <img
              className="object-cover object-center"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3944.png?v=1714416176"
              alt="banner_img"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="text_side min-w-[50%] h-full py-20 sm:py-12 px-5 sm:px-8">
            <div className="content lg:max-w-lg mx-auto">
              <h1 className="playfair max-w-xs sm:max-w-full mb-6 text-4xl sm:text-5xl xl:text-6xl font-semibold">
                A New <br /> Destination for <br /> Natural Cosmetics
              </h1>
              <p className="roboto mb-6 text-sm sm:text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Button name="Shop Now" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
