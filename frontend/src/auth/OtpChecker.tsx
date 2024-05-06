import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtpAsync } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const OtpChecker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    otp: "",
    userId: userId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(verifyOtpAsync(formData)).then(() => {
      navigate("/reset");
      setFormData({
        otp: "",
      });
    });
  };

  return (
    <>
      <section className="py-10 sm:py-10 px-3 sm:px-4 xl:px-0 bg-[#FDEDF5]">
        <div className="max-w-5xl xl:max-w-4xl mx-auto">
          <div className="flex justify-center items-center flex-col-reverse sm:flex-row gap-10 md:gap-2 min-h-[80vh]">
            {/* IMAGE SIDE */}
            <div className="min-w-[50%] mx-auto hidden md:flex">
              <img
                className="w-[90%]"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3951_1.png?v=1715021877"
                alt="login Img"
              />
            </div>

            {/* FORM SIDE */}
            <div className="min-w-[60%] md:min-w-[50%]">
              <h1 className="playfair max-w-xs sm:max-w-full mb-5 text-4xl sm:text-4xl font-bold">
                OTP Verification
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* EMAIL */}
                <div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3"
                    type="number"
                    id="otp"
                    name="otp"
                    placeholder=""
                    value={formData.otp}
                    onChange={(e) =>
                      setFormData({ ...formData, otp: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 mx-auto bg-[#EC72AF] text-white flex justify-center tracking-wide"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtpChecker;
