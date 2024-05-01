import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="w-full py-14 sm:py-14 px-5 sm:px-8 lg:px-10 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header">
            <div className="flex justify-between items-center">
              <div className="playfair text-5xl font-semibold ">Cart</div>
              <div className="text-md font-semibold text-[#EC72AF] underline underline-offset-4">
                <Link to="/products">Return to Shop</Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" py-6">
              <div className=" bg-white divide-y">
                {/* First Product Row */}
                <div className="grid md:grid-cols-4 items-center gap-8 py-6">
                  <div className="md:col-span-2 flex items-center gap-6">
                    <div className="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                      <img
                        className="w-full h-full object-contain rounded-md"
                        src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                      />
                    </div>
                    <div>
                      <h3 className="playfair text-lg tracking-wide font-bold text-[#333]">
                        VelvetGlide Boots
                      </h3>
                      <h6 className="text-md text-gray-500 mt-2">
                        Category: <strong className="ml-2">Skincare</strong>
                      </h6>
                    </div>
                  </div>

                  <div className="flex">
                    <button
                      className="bg-transparent py-2 font-semibold text-[#333]"
                      type="button"
                    >
                      <svg
                        className="w-3 fill-current"
                        viewBox="0 0 124 124"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                    <button
                      className="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="bg-transparent py-2 font-semibold text-[#333]"
                      type="button"
                    >
                      <svg
                        className="w-3 fill-current"
                        viewBox="0 0 42 42"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center">
                    <h4 className="text-lg font-bold text-[#333]">$20.00</h4>
                    <svg
                      className="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                      viewBox="0 0 320.591 320.591"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"
                      />
                      <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                </div>

                {/* Second Product Row */}
                <div className="grid md:grid-cols-4 items-center gap-8 py-6">
                  <div className="md:col-span-2 flex items-center gap-6">
                    <div className="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                      <img
                        className="w-full h-full object-contain rounded-md"
                        src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                      />
                    </div>
                    <div>
                      <h3 className="playfair text-lg tracking-wide font-bold text-[#333]">
                        VelvetGlide Boots
                      </h3>
                      <h6 className="text-md text-gray-500 mt-2">
                        Category: <strong className="ml-2">Skincare</strong>
                      </h6>
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      className="bg-transparent py-2 font-semibold text-[#333]"
                      type="button"
                    >
                      <svg
                        className="w-3 fill-current"
                        viewBox="0 0 124 124"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                    <button
                      className="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="bg-transparent py-2 font-semibold text-[#333]"
                      type="button"
                    >
                      <svg
                        className="w-3 fill-current"
                        viewBox="0 0 42 42"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <h4 className="text-lg font-bold text-[#333]">$24.00</h4>
                    <svg
                      className="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                      viewBox="0 0 320.591 320.591"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"
                      />
                      <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-1 text-right text-lg">
                <p>
                  Total amount:
                  <span className="font-semibold"> Rs. 48,967</span>
                </p>
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                <Link
                  to="/products"
                  onClick={() => window.scroll(0, 0)}
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm tracking-wide font-semibold text-black shadow-sm hover:bg-[#EC72AF] hover:border-[#EC72AF] hover:text-white"
                >
                  Back to shop
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => window.scroll(0, 0)}
                  type="button"
                  className="rounded-md border px-3 py-2 text-sm tracking-wide font-semibold shadow-sm bg-[#EC72AF] border-[#EC72AF] text-white"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
