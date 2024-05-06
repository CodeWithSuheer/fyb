import { useNavigate, useParams } from "react-router-dom";
import productData from "../../Data/ProductData";
import { addToCart } from "../../features/ActionsSlice";
import { useDispatch } from "react-redux";
import { IoStar } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import toast from "react-hot-toast";

interface RouteParams {
  id: string;
}

const SelectedItem: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<RouteParams>();
  const itemId = parseInt(id, 10);
  const products = productData;

  // filter product based on id
  const selectedItem = products.filter((item) => item.id === itemId);
  console.log("selectedItem", selectedItem);

  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
      navigate("/products");
      toast.success("Item Added to Cart");
    }
  };

  return (
    <>
      <div className="pt-4">
        <div className="p-6 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {selectedItem.map((product, index) => (
            <>
              <p className="mb-4">Home / Shop / {product.title}</p>
              <div
                key={index}
                className="grid items-start grid-cols-1 lg:grid-cols-2 gap-5"
              >
                <div className="w-full lg:sticky top-0 sm:flex gap-2">
                  {/* 5 IMAGES SIDEBAR */}
                  <div className="mt-1 sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                    <img
                      alt="Product1"
                      className="w-full cursor-pointer"
                      src="https://readymadeui.com/images/product1.webp"
                    />
                    <img
                      alt="Product2"
                      className="w-full cursor-pointer"
                      src="https://readymadeui.com/images/product6.webp"
                    />
                    <img
                      alt="Product3"
                      className="w-full cursor-pointer"
                      src="https://readymadeui.com/images/product7.webp"
                    />
                    <img
                      alt="Product4"
                      className="w-full cursor-pointer"
                      src="https://readymadeui.com/images/product3.webp"
                    />
                  </div>

                  {/* MAIN DISPLAYER IMAGE */}
                  <img
                    alt="Product"
                    className="w-4/5 rounded object-cover"
                    src={product.images[0]}
                  />
                </div>

                {/* CONTENT SIDE */}
                <div>
                  {/* REVIEWS STARS */}
                  <div className="flex space-x-2 mb-4">
                    <IoStar size={22} className="text-[#FFC209]" />
                    <IoStar size={22} className="text-[#FFC209]" />
                    <IoStar size={22} className="text-[#FFC209]" />
                    <IoStar size={22} className="text-[#FFC209]" />
                    <IoStar size={22} className="text-[#FFC209]" />
                  </div>

                  <h2 className="text-3xl font-extrabold text-gray-800">
                    {product.title}
                  </h2>

                  {/* ABOUT */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      (Skincare)
                    </h3>
                    <div className="space-y-3 mt-4 pl-0 text-sm text-gray-800">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque, voluptas. Quidem sapiente maxime sunt
                        beatae? Asperiores illo perferendis corporis officia,
                        quam consequatur aperiam enim voluptatem cum sequi
                        doloribus numquam eum ab, tempore delectus sed.
                        Inventore asperiores sint blanditiis? Quo ipsum fugiat
                        placeat sint sit ullam illum, nostrum, unde iure, labore
                        incidunt. Ipsam perferendis, eum culpa libero quibusdam
                        illum sit aliquid.
                      </p>
                    </div>
                  </div>

                  {/* PRICE SECTION */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    <p className="text-gray-800 text-2xl font-bold">Rs. 1000</p>
                  </div>

                  {/* CART BUTTON */}
                  <button
                    onClick={handleAddToCart}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-[#EC72AF] hover:bg-[#f181b9] text-white font-bold rounded"
                    type="button"
                  >
                    Add to cart <BiCartAlt />
                  </button>
                </div>
              </div>

              {/* DESCRIPTION SECTION */}
              <div className="mt-16 max-w-4xl">
                <ul className="flex border-b">
                  <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                    Description
                  </li>
                  <li className="text-gray-400 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                    Reviews
                  </li>
                </ul>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    Product Description
                  </h3>
                  <p className="text-sm text-gray-800 mt-4">
                    Elevate your casual style with our premium men's t-shirt.
                    Crafted for comfort and designed with a modern fit, this
                    versatile shirt is an essential addition to your wardrobe.
                    The soft and breathable fabric ensures all-day comfort,
                    making it perfect for everyday wear. Its classic crew neck
                    and short sleeves offer a timeless look.
                  </p>
                </div>
                <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-800">
                  <li>
                    A gray t-shirt is a wardrobe essential because it is so
                    versatile.
                  </li>
                  <li>
                    Available in a wide range of sizes, from extra small to
                    extra large, and even in tall and petite sizes.
                  </li>
                  <li>
                    This is easy to care for. They can usually be machine-washed
                    and dried on low heat.
                  </li>
                  <li>
                    You can add your own designs, paintings, or embroidery to
                    make it your own.
                  </li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>

      <section className="mt-10 py-14 sm:py-16 px-3 sm:px-4 xl:px-0 bg-[#FFF3F9]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="header flex justify-between items-center flex-wrap gap-6">
            <div className="name">
              <h2 className="mb-2.5 playfair text-center text-4xl sm:text-4xl font-bold">
                Related Products
              </h2>
              <p className=" h-0.5 w-16 bg-[#EC72AF]"></p>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              <div className="group mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56 transition duration-500 group-hover:scale-105"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products "
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
              <div className="group mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56 transition duration-500 group-hover:scale-105"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products "
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
              <div className="group mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56 transition duration-500 group-hover:scale-105"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products "
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
              <div className="group mb-3 relative group w-full pt-5 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                <img
                  className="object-cover w-full h-56 transition duration-500 group-hover:scale-105"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  alt="products "
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

export default SelectedItem;
