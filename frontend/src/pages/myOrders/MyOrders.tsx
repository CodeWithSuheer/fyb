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
      // dispatch(getallOrderAsync(id));
    }
  }, [userID, dispatch]);

  return (
    <>
      <div className="min-h-screen bg-[#FDEDF5] w-full overflow-hidden">
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Order History</h1>
              <button
                className="inline-flex bg-white items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                type="button"
                id="radix-:r2p:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {allOrder.map((data, index) => (
                <div className="rounded-lg bg-white border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">#1234</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        June 15, 2023
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Items Ordered
                        </p>
                        <p>2 x Acme Widgets</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Total Amount
                        </p>
                        <p className="font-medium">$99.98</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Order Status
                        </p>
                        <p className="text-green-500 font-medium">Delivered</p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center p-6 flex justify-end">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      View Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MyOrders;
