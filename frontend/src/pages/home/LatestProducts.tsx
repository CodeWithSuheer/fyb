import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LatestProducts = ({ allproducts }) => {
  const navigate = useNavigate();

  // console.log("allproducts", allproducts.products);

  // HANDLE ITEM CLICK
  const handleItemClick = (productId: string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="py-14 sm:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="mb-2.5 playfair text-center text-4xl font-bold">
            Latest Products
          </h2>
          <p className="mx-auto h-0.5 w-16 bg-[#EC72AF]"></p>

          {/* DATA */}
          <div className="data">
            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-8">
              {allproducts?.products?.slice(0, 4).map((data, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(String(data.id))}
                  className="group mb-3 relative group w-full pt-0 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer transition-transform duration-300 transform hover:-translate-y-[5px]"
                >
                  <img
                    className="object-cover w-full h-56"
                    src={data.image.downloadURL}
                    alt="products "
                  />

                  <div className="py-5 text-center">
                    <h3 className="playfair mb-2 text-md sm:text-lg font-semibold text-gray-800">
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;
