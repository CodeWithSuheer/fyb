import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { updateuserAsync, userSessionAsync } from "../../features/authSlice";
import { createOrderAsync, getallOrderAsync } from "../../features/orderSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "keep-react";
import { Helmet } from "react-helmet";
import { Check } from "phosphor-react";
import { clearCart } from "../../features/ActionsSlice";
import { verifyCouponAsync } from "../../features/couponSlice";

export interface couponSuccess {
  couponDiscountSuccess: boolean;
  code: string;
  discount: number;
  discountAmount: number;
}

interface formData {
  phone: string;
  address: string;
}

export interface RequestData {
  name: string | undefined;
  phone: string;
  address: string;
  items: any;
  userID: string | undefined;
  totalAmount: string;
  couponUsed?: {
    code: string;
    discount: number;
  };
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");

  const { loading } = useAppSelector((state) => state.orders);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      handleMoveTop();
      navigate("/");
    }, 100);
  };

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const [formData, setFormData] = useState<formData>({
    phone: user?.user?.phone || "",
    address: user?.user?.address || "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const shippingCharges = 300;

  const [showCouponInput, setShowCouponInput] = useState(false);

  const handleCouponButtonClick = () => {
    setShowCouponInput(!showCouponInput);
  };

  const { cart, totalPrice } = useAppSelector((state) => state.actions);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [cart, navigate, user]);

  const handleMoveTop = () => {
    window.scroll(0, 0);
  };

  const [couponSuccessData, setCouponSuccessData] = useState<couponSuccess>({
    code: "",
    discount: 0,
    discountAmount: 0,
    couponDiscountSuccess: false,
  });

  const couponData = {
    code: coupon,
    discount: couponSuccessData?.discountAmount,
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const id = userID;
    dispatch(updateuserAsync({ id, ...formData })).then((res) => {
      dispatch(userSessionAsync());

      if (res.payload.message === "Update Successfull") {
        const { phone, address } = formData;
        const items = cart;
        const totalAmount = couponSuccessData
          ? totalPrice - couponSuccessData?.discountAmount
          : totalPrice;

        const requestData = {
          name: user?.user?.name,
          phone,
          address,
          items,
          userID,
          totalAmount,
          ...(couponSuccessData.code !== "" && { couponUsed: couponData }),
        };

        dispatch(createOrderAsync(requestData)).then((res) => {
          if (res.payload.message === "Order PLaced Succcessfully") {
            openModal();
            dispatch(clearCart());
            dispatch(getallOrderAsync(id));
          }
          setFormData({
            phone: "",
            address: "",
          });
        });
      }
    });
  };

  const categories = cart.map((item: any) => item.category);

  const handleVerifyCoupon = () => {
    const formData = {
      code: coupon,
      userId: userID,
      category: categories,
    };
    dispatch(verifyCouponAsync(formData)).then((res) => {
      if (res.payload.couponDiscountSuccess) {
        setCouponSuccessData(res.payload);
      }
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout - For Your Beauty</title>
      </Helmet>

      <section className="w-full bg-[#FFF3F9] py-14 sm:py-12 px-0 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="px-2 py-10 bg-white text-gray-900 md:px-8">
                <div className="flow-root">
                  <div className="-my-6 divide-y divide-gray-200">
                    <div className="py-6">
                      <form ref={formRef} onSubmit={handleSubmit}>
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
                              {/* FULL NAME */}
                              {/* <div className="mt-1 w-full col-span-2">
                                <input
                                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  id="name"
                                  type="text"
                                  name="name"
                                  value={user?.user.name}
                                  onChange={handleInputChange}
                                  placeholder="Enter Your Name"
                                />
                              </div> */}

                              {/* PHONE NUMBER */}
                              <div className="mt-1 w-full col-span-2">
                                <input
                                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  type="number"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="Phone Number"
                                  id="name"
                                  required
                                />
                              </div>

                              <textarea
                                rows={7}
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter Shipping Address"
                                className="col-span-2 resize-y w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                              ></textarea>
                            </div>
                          </div>

                          <div className="flex justify-end pt-3">
                            {/* <button
                              type="submit"
                              className="rounded-md bg-[#EC72AF] hover:bg-[#f181b9] px-4 py-2.5 tracking-wide text-sm font-semibold text-white shadow-sm"
                            >
                              ORDER NOW
                            </button> */}

                            <div className="buttons">
                              {loading ? (
                                <button
                                  disabled={loading}
                                  type="button"
                                  className="rounded-md bg-[#EC72AF] hover:bg-[#f181b9] px-4 py-2.5 tracking-wide text-sm font-semibold text-white shadow-sm"
                                >
                                  <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="#E5E7EB"
                                    ></path>
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  Loading...
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  className="rounded-md bg-[#EC72AF] hover:bg-[#f181b9] px-4 py-2.5 tracking-wide text-sm font-semibold text-white shadow-sm"
                                >
                                  ORDER NOW
                                </button>
                              )}
                            </div>
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
                    {cart.map((product: any) => (
                      <li
                        key={product.id}
                        className="flex items-stretch justify-between space-x-5 py-7"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-cover"
                              src={product?.image.downloadURL}
                              alt={product?.name}
                            />
                          </div>
                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold">
                                {product?.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product?.category}
                              </p>
                            </div>
                            <p className="mt-3 text-sm font-medium ">
                              x {product?.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {/* Rs. {product?.price * product.quantity} */}
                            {product?.sale_price !== 0 ||
                            product?.sale_price > 0 ? (
                              <>
                                <p className="">Rs. {product?.sale_price}</p>
                              </>
                            ) : (
                              <p className="">Rs. {product?.price}</p>
                            )}
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
                <>
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
                      <div className="sm:flex items-center sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                        <div className="flex-grow">
                          <input
                            className="flex w-[90%] rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter coupon code"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                          <button
                            onClick={handleVerifyCoupon}
                            type="button"
                            className="bg-[#EC72AF] text-white px-6 py-1.5 rounded-lg"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-center justify-between text-gray-600">
                    <p className="text-md font-medium">Subtotal</p>
                    <p className="text-md font-medium">Rs. {totalPrice}</p>
                  </li>
                  {/* <li className="flex items-center justify-between text-gray-600">
                    <p className="text-md font-medium">Shipping Charges</p>
                    <p className="text-md font-medium">Rs. {shippingCharges}</p>
                  </li> */}
                  {couponSuccessData?.couponDiscountSuccess ? (
                    <li className="flex items-center justify-between text-gray-600">
                      <p className="text-md font-medium">Coupon Discount</p>
                      <p className="text-md font-medium">
                        Rs. {couponSuccessData?.discountAmount}
                      </p>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="flex items-center justify-between text-gray-900">
                    <p className="text-md font-medium ">Total</p>
                    <p className="text-md font-bold ">
                      Rs.{" "}
                      {couponSuccessData
                        ? totalPrice - couponSuccessData?.discountAmount
                        : totalPrice}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <Modal.Icon className="h-20 w-20 border border-success-100 bg-success-50 text-success-500">
            <Check size={60} />
          </Modal.Icon>
          <Modal.Content className="my-4 text-center">
            <h3 className="mb-2 text-body-1 font-bold text-metal-900">
              Order Successfully Placed
            </h3>
            <p className="mx-auto max-w-xs text-body-4 font-normal text-metal-600">
              Thanks for choosing us! We're excited to provide outstanding
              service.
            </p>

            <p className="mt-4 underline underline-offset-4 mx-auto max-w-xs text-md text-body-4 font-normal text-green-600">
              <Link to="/orders" onClick={() => window.scroll(0, 0)}>
                View Orders
              </Link>
            </p>
          </Modal.Content>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Checkout;
