import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getallOrderAsync, updateOrderAsync } from "../../features/orderSlice";
import { Helmet } from "react-helmet";

const MyOrders = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const allOrder = useAppSelector((state) => state.orders.allOrders);
  console.log("allOrder", allOrder);

  useEffect(() => {
    if (userID) {
      const id = userID;
      dispatch(getallOrderAsync(id));
    }
  }, [userID, dispatch]);

  const handleDelete = (id) => {
    const formData = {
      id,
      orderProgress: "Cancelled",
    };
    dispatch(updateOrderAsync(formData));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Delivered":
        return "text-green-500";
      case "Dispatched":
        return "text-blue-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orders - For Your Beauty</title>
      </Helmet>

      <section className="w-full  py-14 sm:py-12 px-5 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl mx-auto">
          <h2 className="playfair text-3xl font-bold">Order Details</h2>
          <div className="mt-3 text-sm">
            Check the status of recent and old orders
          </div>
          {allOrder.map((data, index) => (
            <div
              key={index}
              className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row"
            >
              {/* ORDER DETAILS */}
              <div className="w-full border-r border-gray-300 bg-[#FFF3F9] md:max-w-xs">
                <div className="py-8 px-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2">
                    <div className="mb-4">
                      <div className="text-md sm:text-md font-semibold">
                        Order ID
                      </div>
                      <div className="text-md font-medium text-gray-700">
                        {data?.OrderID}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-md sm:text-md font-semibold">Date</div>
                      <div className="text-md font-medium text-gray-700">
                        {new Date(data?.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-md sm:text-md font-semibold">
                        Total Amount
                      </div>
                      <div className="text-md font-medium text-gray-700">
                        Rs. {data?.totalAmount}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-md sm:text-md font-semibold">
                        Order Status
                      </div>
                      <div
                        className={`text-md font-medium ${getStatusColor(
                          data?.orderProgress
                        )}`}
                      >
                        {data?.orderProgress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ORDER ITEMS */}
              <div className="flex-1 bg-white">
                <div className="py-6 px-3 sm:px-6">
                  <ul className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    {data?.items.map((product) => (
                      <li
                        key={product.id}
                        className="flex px-3 flex-col justify-between space-x-5 py-7 md:flex-row border rounded-xl bg-[#FFF3F9]"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                              src={product?.image.downloadURL}
                              alt="order_img"
                            />
                          </div>

                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-900">
                                {product.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product.category}
                              </p>
                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-500">
                              x {product.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {product.price !== product.sale_price ? (
                              <>
                                <p className="">Rs. {product.sale_price}</p>
                              </>
                            ) : (
                              <p className="">Rs. {product.price}</p>
                            )}
                          </p>
                        </div>
                        {/* {data?.orderProgress === "Pending" && <li>
                          <button onClick={() => handleDelete(data.id)} className="text-red-500">             
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                          </button>
                        </li>} */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyOrders;
