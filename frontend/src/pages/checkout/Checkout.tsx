import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const shippingCharges = 300;

  const [showCouponInput, setShowCouponInput] = useState(false);

  const handleCouponButtonClick = () => {
    setShowCouponInput(!showCouponInput);
  };

  const { cart, totalPrice } = useAppSelector((state) => state.actions);

  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  return (
    <section className="w-full bg-[#FFF3F9] py-14 sm:py-12 px-5 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
      <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-xl shadow border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="px-5 py-10 bg-white text-gray-900 md:px-8">
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="py-6">
                    <form>
                      <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                        {/* CONTACT DETAILS */}
                        <div>
                          <h3
                            id="contact-info-heading"
                            className="playfair text-3xl font-bold text-gray-900"
                          >
                            Contact Information
                          </h3>

                          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-4">
                            {/* FIRST NAME */}
                            <div className="mt-1 w-full">
                              <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="First Name"
                                id="name"
                              />
                            </div>

                            {/* LAST NAME */}
                            <div className="mt-1 w-full">
                              <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Last Name"
                                id="name"
                              />
                            </div>

                            {/* PHONE NUMBER */}
                            <div className="mt-1 w-full">
                              <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                placeholder="Phone Number"
                                id="name"
                              />
                            </div>

                            {/* POSTAL CODE */}
                            <div className="mt-1 w-full">
                              <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Postal Code"
                                id="name"
                              />
                            </div>

                            <textarea
                              rows={7}
                              placeholder="Enter Shipping Address"
                              className="col-span-2 resize-y w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            ></textarea>
                          </div>
                        </div>

                        <div className="flex justify-end pt-3">
                          <button
                            type="button"
                            className="rounded-md bg-[#EC72AF] px-4 py-2.5 tracking-wide text-sm font-semibold text-white shadow-sm"
                          >
                            ORDER NOW
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Product List */}
            <div className="bg-gray-100 px-5 py-10 md:px-8">
              <div className="flow-root">
                <ul className="-my-7 divide-y divide-gray-200">
                  {cart.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-stretch justify-between space-x-5 py-7"
                    >
                      <div className="flex flex-1 items-stretch">
                        <div className="flex-shrink-0">
                          <img
                            className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                            src={product?.images[0]}
                            alt={product?.images[0]}
                          />
                        </div>
                        <div className="ml-5 flex flex-col justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-bold">
                              {product?.title}
                            </p>
                            <p className="mt-1.5 text-sm font-medium text-gray-500">
                              {product?.category.name}
                            </p>
                          </div>
                          <p className="mt-4 text-sm font-medium ">
                            x {product?.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto flex flex-col items-end justify-between">
                        <p className="text-right text-sm font-bold text-gray-900">
                          Rs. {product?.price * product.quantity}
                        </p>
                        <button
                          type="button"
                          className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                        >
                          <span className="sr-only">Remove</span>
                          {/* <X className="h-5 w-5" /> */}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="mt-6 border-gray-200" />
              <div className="mt-6">
                <div className="button_coupn flex justify-end">
                  <button
                    onClick={handleCouponButtonClick}
                    className="mb-3 text-[#EC72AF] font-medium underline underline-offset-2"
                  >
                    Have a coupon ?
                  </button>
                </div>

                {showCouponInput && (
                  <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                    <div className="flex-grow">
                      <input
                        className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter coupon code"
                      />
                    </div>

                    {/* APPLY COUPON CODE */}
                    <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                      <button
                        type="button"
                        className="rounded-md bg-[#EC72AF] px-3 py-2 text-sm font-semibold text-white shadow-sm"
                      >
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between text-gray-600">
                  <p className="text-md font-medium">Sub total</p>
                  <p className="text-md font-medium">Rs. {totalPrice}</p>
                </li>
                <li className="flex items-center justify-between text-gray-600">
                  <p className="text-md font-medium">Shipping Charges</p>
                  <p className="text-md font-medium">Rs. {shippingCharges}</p>
                </li>
                <li className="flex items-center justify-between text-gray-900">
                  <p className="text-md font-medium ">Total</p>
                  <p className="text-md font-bold ">
                    Rs. {totalPrice + shippingCharges}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
