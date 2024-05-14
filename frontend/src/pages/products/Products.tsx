import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Helmet } from "react-helmet";
import "./Products.css";
import { useDispatch } from "react-redux";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const allproducts = useAppSelector((state) => state.products.products || []);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || "All";


  useEffect(() => {
    if (category) {
      const filtered = allproducts.products.filter(
        (product) => product?.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allproducts.products);
    }
  }, [category, allproducts]);

  const toggleCategory = () => {
    setIsCategoryVisible(!isCategoryVisible);
  };

  const renderPaginationLinks = () => {
    const totalPages = products?.totalPages;
    const paginationLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationLinks.push(
        <li key={i}>
          <Link
            to={`/admin/all_product?category=${category}&page=${i}`}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
              i === page ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => dispatch(getAllProductsAsync({ category, page: i }))}
          >
            {i}
          </Link>
        </li>
      );
    }
    return paginationLinks;
  };

  useEffect(() => {
    
      dispatch(getAllProductsAsync({ category, page }));
    
  }, [dispatch, page, category]);

  // HANDLE ITEM CLICK
  const handleItemClick = (productId: string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

  const handleCategoryFiltering = (category) => {
    navigate(`/admin/all_product?category=${category}`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products - For Your Beauty</title>
      </Helmet>
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
                      <span
                        onClick={() => handleCategoryFiltering("Skincare")}
                        className="text-lg font-normal"
                      >
                        Skincare
                      </span>

                      {/* <span className="transition group-open:-rotate-180">
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
                      </span> */}
                    </summary>

                    {/* <div className="bg-white">
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
                    </div> */}
                  </details>

                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span
                        onClick={() => handleCategoryFiltering("Body Care")}
                        className="text-lg font-normal"
                      >
                        Body Care
                      </span>

                      {/* <span className="transition group-open:-rotate-180">
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
                      </span> */}
                    </summary>

                    {/* <div className="bg-white">
                      <ul className="pl-6" style={{ listStyleType: "initial" }}>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Shower gels
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Body butter
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Body oil
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Body scrubs
                          </p>
                        </li>
                      </ul>
                    </div> */}
                  </details>

                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span
                        onClick={() => handleCategoryFiltering("Haircare")}
                        className="text-lg font-normal"
                      >
                        Haircare
                      </span>

                      {/* <span className="transition group-open:-rotate-180">
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
                      </span> */}
                    </summary>

                    {/* <div className="bg-white">
                      <ul className="pl-6" style={{ listStyleType: "initial" }}>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Shampoo
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Conditioner
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Mask
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Hair oil
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Hair serum
                          </p>
                        </li>
                        <li>
                          <p className="py-1.5 text-md font-normal hover:underline hover:underline-offset-4 cursor-pointer">
                          Hair mist
                          </p>
                        </li>
                      </ul>
                    </div> */}
                  </details>

                  <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 pt-4 pb-2 text-gray-900 transition">
                      <span
                        onClick={() => handleCategoryFiltering("Cosmetics")}
                        className="text-lg font-normal"
                      >
                        Cosmetics
                      </span>
                    </summary>
                  </details>
                </div>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className="products lg:col-span-3">
              {filteredProducts?.length === 0 ? (
                <div className="playfair text-3xl text-center font-medium uppercase">
                  no products
                </div>
              ) : (
                <>
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

                          <p className="mb-3 text-md text-gray-500">
                            (Skincare)
                          </p>

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
                
                 <div className="flex justify-center">
                    <nav aria-label="Page navigation example">
                      <ul className="flex items-center -space-x-px h-8 py-10 text-sm">
                        <li>
                          {products?.page > 1 ? (
                            <Link
                              to={`/admin/all_product?category=${category}&page=${
                                page - 1
                              }`}
                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <span className="sr-only">Previous</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 1 1 5l4 4"
                                />
                              </svg>
                            </Link>
                          ) : (
                            <button
                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-not-allowed"
                              disabled
                            >
                              <span className="sr-only">Previous</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 1 1 5l4 4"
                                />
                              </svg>
                            </button>
                          )}
                        </li>
                        {renderPaginationLinks()}
                        <li>
                          {products?.totalPages !== page ? (
                            <Link
                              to={`/admin/all_product?category=${category}&page=${
                                page + 1
                              }`}
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m1 9 4-4-4-4"
                                />
                              </svg>
                            </Link>
                          ) : (
                            <button
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-not-allowed"
                              disabled
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m1 9 4-4-4-4"
                                />
                              </svg>
                            </button>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
