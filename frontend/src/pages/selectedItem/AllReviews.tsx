import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";


const AllReviews = () => {
  return (
    <>
     <div className="px-5 xl:px-0 reviews max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="mt-10 all_reviews">
            <h2 className="text-2xl text-gray-800 font-semibold">
              ALL REVIEWS
            </h2>

            {allreviews.map((data, index) => (
              <div
                key={index}
                className="mt-3 px-6 py-4 rounded-xl border border-gray-300 bg-[#FFF3F9] all_reviews"
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="left flex items-center gap-2">
                    <h2>Username</h2>{" "}
                    <p className="w-24">
                      <StarRating rating={data?.rating} />
                    </p>
                    {userID === data.userID ? (
                      <p className="text-sm">(Your Review)</p>
                    ) : null}
                  </div>
                  <div className="right">
                    <p>{new Date(data?.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center gap-2">
                  <p className="my-1">{data?.review}</p>

                  <div className="edit flex items-center gap-3">
                    <FiEdit onClick={() => handleUpdateModal()} className="cursor-pointer" size={20} />
                    <IoTrashOutline onClick={() => handleDeleteModal()} className="cursor-pointer" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> 
    </>
  )
}

export default AllReviews
