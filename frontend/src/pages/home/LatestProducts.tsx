import { FaStar } from "react-icons/fa";

const LatestProducts = () => {
  return (
    <>
      <section className="py-14 sm:py-16 px-5 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="mb-2.5 playfair text-center text-4xl font-bold">
            Latest products
          </h2>
          <p className=" mx-auto h-0.5 w-16 bg-[#EC72AF]"></p>

          {/* DATA */}
          <div className="data">
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {/* CARD 1 */}
              <div className="relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-xl font-semibold text-gray-800">
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

                  <button className="hidden group-hover:block absolute w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-xl font-semibold text-gray-800">
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

                  <button className="hidden group-hover:block absolute w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-xl font-semibold text-gray-800">
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

                  <button className="hidden group-hover:block absolute w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products"
                />

                <div className="py-5 text-center">
                  <h3 className="playfair mb-2 text-xl font-semibold text-gray-800">
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

                  <button className="hidden group-hover:block absolute w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
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

export default LatestProducts;
