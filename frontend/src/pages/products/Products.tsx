import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import "./Products.css";

// const data = [
//   {
//     id: "1",
//     img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
//     name: " Basic Tee",
//     price: "200",
//   },
//   {
//     id: "2",
//     img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
//     name: " Basic Tee",
//     price: "200",
//   },
//   {
//     id: "3",
//     img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
//     name: " Basic Tee",
//     price: "200",
//   },
//   {
//     id: "4",
//     img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
//     name: " Basic Tee",
//     price: "200",
//   },
//   {
//     id: "5",
//     img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
//     name: " Basic Tee",
//     price: "200",
//   },
//   {
//     id: "6",
//     img: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393",
//     name: " Basic Tee",
//     price: "200",
//   },
// ];

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.15 * index,
//     },
//   }),
// };

const Products = () => {
  const navigate = useNavigate();
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const allproducts = useAppSelector((state) => state.products.products || []);
  console.log("allproducts", allproducts.products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  console.log("category", category);

  useEffect(() => {
    if (category) {
      const filtered = allproducts.products.filter(
        (product) => product?.category === category
      );
      console.log("filtered", filtered);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allproducts.products);
    }
  }, [category, allproducts]);

  const toggleCategory = () => {
    setIsCategoryVisible(!isCategoryVisible);
  };

  // HANDLE ITEM CLICK
  const handleItemClick = (productId: string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

  return (
    <>
      {/* BANNER IMAGE */}
      <section className="product_banner">
        <div className="py-12 sm:py-28 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="playfair mb-2 text-black text-2xl sm:text-4xl font-bold text-center max-w-xl">
            Shop
          </h2>
          <h2 className="mb-5 text-black text-md sm:text-md font-light text-center max-w-xl">
            Home / Shop
          </h2>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section>
        <div className="mx-auto max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-5 xl:px-0">
          <div className="mt-8 block lg:hidden">
            <button
              className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
              onClick={toggleCategory}
            >
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-4 ${
                  isCategoryVisible ? "rotate-180" : "rtl:rotate-180"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-5">
            <div
              className={`mb-7 category ${
                isCategoryVisible ? "lg:block" : "hidden"
              } space-y-4 lg:block border px-5 py-5 shadow-xl rounded-lg`}
            >
              <div>
                <p className="playfair block text-2xl tracking-wide font-bold text-gray-700">
                  Categories
                </p>

                <div className="mt-1">
                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span className="text-lg font-normal">Skincare</span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white">
                      <ul className="pl-6" style={{ listStyleType: "initial" }}>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Facewash
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Serums
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Moisturizer
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Toner
                          </p>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span className="text-lg font-normal">Bodycare</span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white">
                      <ul className="pl-6" style={{ listStyleType: "initial" }}>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Facewash
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Serums
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Moisturizer
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Toner
                          </p>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span className="text-lg font-normal">Haircare</span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white">
                      <ul className="pl-6" style={{ listStyleType: "initial" }}>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Facewash
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Serums
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Moisturizer
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                            Toner
                          </p>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span className="text-lg font-normal">Cosmetics</span>
                    </summary>
                  </details>
                </div>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className="products lg:col-span-3">
              <ul className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {filteredProducts?.map((data, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(String(data.id))}
                  >
                    <div className="group mb-5 relative group w-full bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                      <img
                        className="object-cover w-full h-56"
                        src={data?.image.downloadURL}
                        alt="products"
                      />

                      <div className="py-5 text-center">
                        <h3 className="playfair mb-2 text-md sm:text-lg font-semibold text-gray-800">
                          {data?.name}
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

                        {data.price !== data.sale_price ? (
                          <>
                            <p className="mb-1 text-xl font-semibold text-black">
                              Rs. {data.sale_price}
                            </p>
                            <p className="mb-3 text-md font-semibold text-gray-500 line-through">
                              Rs. {data.price}
                            </p>
                          </>
                        ) : (
                          <p className="mb-3 text-xl font-semibold text-black">
                            Rs. {data.price}
                          </p>
                        )}

                        <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
