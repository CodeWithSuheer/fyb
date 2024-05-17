import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Spinner } from "keep-react";
import { updateuserAsync, userSessionAsync } from "../../features/authSlice";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [loginLoading, setLoginLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.user?.name || "",
    email: user?.user?.email || "",
    phone: user?.user?.phone || "",
    address: user?.user?.address || "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.user?.name || "",
        email: user?.user?.email || "",
        phone: user?.user?.phone || "",
        address: user?.user?.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    const id = userID;

    const updatedFields = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== user?.user[key]) {
        updatedFields[key] = formData[key];
      }
    });

    if (Object.keys(updatedFields).length === 0) {
      toast.error("No changes made");
      setLoginLoading(false);
      return;
    }

    dispatch(updateuserAsync({ id, ...updatedFields })).then((res) => {
      dispatch(userSessionAsync());
      setLoginLoading(false);
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile - For Your Beauty</title>
      </Helmet>
      <section className="w-full bg-[#FDEDF5] py-14 sm:py-12 px-2 sm:px-8 lg:px-10 xl:px-0">
        <div className="p-6 sm:p-8 rounded-xl max-w-4xl bg-white xl:max-w-4xl mx-auto">
          {/* PERSONAL INFO */}
          <div className="mb-8">
            <h2 className="mb-3 playfair text-2xl font-bold text-gray-800">
              Personal Information
            </h2>
            <p className="text-sm text-gray-600">
              Manage your name, password and account settings.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              {/* full name label */}
              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-full-name"
                >
                  Full name
                </label>
              </div>

              {/* full name input fields */}
              <div className="sm:col-span-9">
                <div className="sm:flex gap-3">
                  <input
                    className="bg-gray-50 mb-3 sm:mb-0 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                    placeholder="Enter your Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* full email label */}
              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-email"
                >
                  Email
                </label>
              </div>

              {/* full email input fields */}
              <div className="sm:col-span-9">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                  id="af-account-email"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-password"
                >
                  Password
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="af-account-password"
                    placeholder="Enter current password"
                    type="text"
                  />
                  <input
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter new password"
                    type="text"
                  />
                </div>
              </div> */}

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    className="inline-block text-sm text-gray-800 mt-2.5"
                    htmlFor="af-account-phone"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                    id="af-account-phone"
                    placeholder="Enter Phone Number"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-bio"
                >
                  Address
                </label>
              </div>

              <div className="sm:col-span-9">
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                  id="af-account-bio"
                  placeholder="Enter Your Address..."
                  rows={5}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-7 flex justify-end gap-x-2">
              {loginLoading ? (
                <button className="w-40 h-11 items-center mx-auto bg-[#EC72AF] text-white flex justify-center tracking-wide">
                  <Spinner color="pink" size="md" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-40 h-11 items-center mx-auto bg-[#EC72AF] text-white flex justify-center tracking-wide"
                >
                  Save changes
                </button>
              )}

              {/* <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-[#EC72AF] hover:bg-[#f181b9]disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button> */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
