import { FaStar } from "react-icons/fa";

const Skincare = () => {
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
              <button className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none">
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
              <button className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none">
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
            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {/* CARD 1 */}
              <div className="mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-lg font-semibold text-gray-800">
                    Natural Serum
                  </h3>

                  {/* STARS */}
                  <div className="mb-2 flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                  </div>

                  <p className="mb-3 text-md text-gray-500">(Skincare)</p>

                  <p className="mb-3 text-xl font-semibold text-black">$100</p>

                  <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-lg font-semibold text-gray-800">
                    Natural Serum
                  </h3>

                  {/* STARS */}
                  <div className="mb-2 flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                  </div>

                  <p className="mb-3 text-md text-gray-500">(Skincare)</p>

                  <p className="mb-3 text-xl font-semibold text-black">$100</p>

                  <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-lg font-semibold text-gray-800">
                    Natural Serum
                  </h3>

                  {/* STARS */}
                  <div className="mb-2 flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                  </div>

                  <p className="mb-3 text-md text-gray-500">(Skincare)</p>

                  <p className="mb-3 text-xl font-semibold text-black">$100</p>

                  <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-lg font-semibold text-gray-800">
                    Natural Serum
                  </h3>

                  {/* STARS */}
                  <div className="mb-2 flex items-center justify-center gap-1">
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                    <FaStar className="text-[#FFC107]" />
                  </div>

                  <p className="mb-3 text-md text-gray-500">(Skincare)</p>

                  <p className="mb-3 text-xl font-semibold text-black">$100</p>

                  <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skincare;
