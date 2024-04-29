import { IoIosArrowRoundForward } from "react-icons/io";

const OurCategory = () => {
  return (
    <>
      <section className="py-14 sm:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="mb-2.5 playfair text-center text-4xl font-bold">
            Our Category
          </h2>
          <p className=" mx-auto h-0.5 w-16 bg-[#EC72AF]"></p>

          {/* CONTENT */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3946_2896c00c-2b5d-47b5-b575-200a6f7bcaf4.png?v=1714421689"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                      Skincare
                    </h3>

                    <p className="text-white text-sm tracking-wider flex items-center gap-1">
                      Learn More <IoIosArrowRoundForward size={25} />
                    </p>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3947.png?v=1714424364"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                      Skincare
                    </h3>

                    <p className="text-white text-sm tracking-wider flex items-center gap-1">
                      Learn More <IoIosArrowRoundForward size={25} />
                    </p>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3948.png?v=1714424361"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                      Skincare
                    </h3>

                    <p className="text-white text-sm tracking-wider flex items-center gap-1">
                      Learn More <IoIosArrowRoundForward size={25} />
                    </p>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_1211.png?v=1714424373"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                      Skincare
                    </h3>

                    <p className="text-white text-sm tracking-wider flex items-center gap-1">
                      Learn More <IoIosArrowRoundForward size={25} />
                    </p>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCategory;
