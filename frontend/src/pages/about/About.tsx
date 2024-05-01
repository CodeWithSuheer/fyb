import "./About.css";
import AboutSection from "../home/AboutSection";
import Review from "../home/Review";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="py-12 sm:py-24 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            About Us
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / About Us
          </h2>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-0 py-4 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_72014.png?v=1714583762"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 px-4 sm:px-0 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
            <h1 className="playfair mb-5 font-bold max-w-md text-3xl md:text-5xl text-[#272727]">
              Our Story
            </h1>
            <p className="mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vestibulum velit
              suspendisse aliquet magnis dapibus dictum enim praesent. Sit non
              eleifend nisl mi sit aliquam. Eget adipiscing hac nisl metus
              malesuada vitae quam erat dui. Mattis erat habitant maecenas nisl
              proin ac ipsum nulla. Nunc lorem tortor commodo rhoncus senectus
              diam quam a. Rhoncus nunc dolor ultricies turpis. Viverra feugiat
              penatibus ac quis. Semper dolor integer id ac sed integer tempus.
              Non nullam mattis tempor scelerisque quis amet velit. Quis aliquet
              gravida tempus turpis tellus at.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- OUR MISSION & VISSION -----------  */}
      <section className="">
        <div className="py-5 sm:py-8 max-w-6xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* LEFT BOX */}
          <div className="left_box text-center px-4 sm:px-10 py-12 border border-[#EC72AF]">
            <img
              className="mx-auto w-20"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group.png?v=1714584117"
              alt=""
            />
            <h2 className="playfair mt-3 text-4xl font-semibold ">
              Our Vision
            </h2>
            <p className="mt-3 font-light">
              Lorem ipsum dolor sit amet consectetur. Vestibulum velit
              suspendisse aliquet magnis dapibus dictum enim praesent. Sit non
              eleifend nisl mi sit aliquam. Eget adipiscing hac nisl metus
              malesuada vitae quam erat dui. Mattis erat habitant maecenas nisl
              proin ac ipsum nulla. Nunc lorem tortor commodo rhoncus senectus
              diam quam a.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="right_box text-center px-4 sm:px-10 py-12 border border-[#EC72AF]">
            <img
              className="mx-auto w-20"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group_1.png?v=1714584117"
              alt=""
            />
            <h2 className="playfair mt-3 text-4xl font-semibold">
              Our Mission
            </h2>
            <p className="mt-3 font-light">
              Lorem ipsum dolor sit amet consectetur. Vestibulum velit
              suspendisse aliquet magnis dapibus dictum enim praesent. Sit non
              eleifend nisl mi sit aliquam. Eget adipiscing hac nisl metus
              malesuada vitae quam erat dui. Mattis erat habitant maecenas nisl
              proin ac ipsum nulla. Nunc lorem tortor commodo rhoncus senectus
              diam quam a.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />

      <Review />
    </>
  );
};

export default About;
