import { Link } from "react-router-dom";

const AboutSection:React.FC = () => {
  
  const handleTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="py-10 px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto bg-[#FFF3F9]">
          <div className=" flex justify-center items-center flex-wrap">
            <div className="content lg:w-[50%] px-5 sm:px-16 md:px-10 py-14">
              <div className="data">
                <h2 className="mb-6 playfair text-4xl sm:text-5xl font-bold">About Us</h2>
                <p className="mb-6 text-md">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum velit
                  suspendisse aliquet magnis dapibus dictum enim praesent. Sit
                  non eleifend nisl mi sit aliquam. Eget adipiscing hac nisl
                  metus malesuada vitae quam erat dui. Mattis erat habitant
                  maecenas nisl proin ac ipsum nulla. Nunc lorem tortor commodo
                  rhoncus senectus diam quam a. Rhoncus nunc dolor ultricies
                  turpis. Viverra feugiat penatibus ac quis. Semper dolor
                  integer id ac sed integer tempus. Non nullam mattis tempor
                  scelerisque quis amet velit. Quis aliquet gravida tempus
                  turpis tellus at.
                </p>

                <Link
                  to="/about"
                  onClick={handleTop}
                  className="text-md mx-auto px-10 py-3 bg-[#EC72AF] text-white font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="img_side lg:w-[50%]">
              <img
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3951.png?v=1714512402"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
