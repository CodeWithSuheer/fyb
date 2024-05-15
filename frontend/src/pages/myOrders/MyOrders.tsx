import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getallOrderAsync } from "../../features/orderSlice";

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

  return (
    <>
      <section className="w-full bg-[#FFF3F9] py-14 sm:py-12 px-5 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="playfair text-3xl font-bold">Order Details</h2>
          <div className="mt-3 text-sm">
            Check the status of recent and old orders & discover more products
          </div>
          {allOrder.map((data, index) => (
            <div
              key={index}
              className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row"
            >
              <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
                <div className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order ID</div>
                      <div className="text-sm font-medium text-gray-700">
                        {data?.OrderID}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Date</div>
                      <div className="text-sm font-medium text-gray-700">
                        {new Date(data?.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Total Amount</div>
                      <div className="text-sm font-medium text-gray-700">
                        Rs. {data?.totalAmount}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order Status</div>
                      <div className="text-sm font-medium text-gray-700">
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white">
                <div className="p-8">
                  <ul className="-my-7 divide-y divide-gray-200">
                    {data?.items.map((product) => (
                      <li
                        key={product.id}
                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
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
