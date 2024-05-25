import { FormEvent, useState } from "react";
import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./Contact.css";
import axios from "axios";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // HANDLE SUBMIT
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/contact/createContact",formdata);
      if(response.status === 201){
        setFormdata({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success(response.data.msg)
      }
    } catch (error:any) {
      throw new Error(error)
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - For Your Beauty</title>
      </Helmet>

      {/* BANNER IMAGE */}
      <section className="contact">
        <div className="py-12 sm:py-24 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            Contact Us
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / Contact Us
          </h2>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-full bg-white">
        <div className="max-w-7xl px-3 sm:px-6 py-12 mx-auto min-h-screen">
          <div className="lg:flex gap-6 sm:gap-10">
            {/* FORMS */}
            <div className="mt-8 lg:w-1/2 lg:mx-6 ">
              <div className="w-full px-4 sm:px-10 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl">
                <h2 className="playfair mt-2 pb-2 text-4xl font-bold text-black">
                  Get in Touch
                </h2>
                <p className="mt-2 text-black">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum velit
                  aliquet magnis dapibus dictum enim praesent.
                </p>
                {/* FORM */}
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#F7F7F7] border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter Full Name"
                      type="text"
                      value={formdata.name}
                      onChange={(e) =>
                        setFormdata({ ...formdata, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#F7F7F7] border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter Your Email Address"
                      type="email"
                      value={formdata.email}
                      onChange={(e) =>
                        setFormdata({ ...formdata, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#F7F7F7] border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter Your Phone Number"
                      type="number"
                      value={formdata.phone}
                      onChange={(e) =>
                        setFormdata({ ...formdata, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="w-full mt-6">
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#F7F7F7] border border-gray-200 rounded-md md:h-36  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter Your Message"
                      value={formdata.message}
                      onChange={(e) =>
                        setFormdata({ ...formdata, message: e.target.value })
                      }
                    />
                  </div>

                  <div className="mt-5 flex justify-start items-center">
                    <button
                      // disabled={createLoading}
                      type="submit"
                      className="px-10 py-2.5 bg-[#EC72AF] text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="lg:w-1/2 px-2 lg:mx-6 mt-20">
              <h2 className="playfair mt-2 pb-2 text-4xl font-bold text-black">
                Contact Info
              </h2>
              <p className="mt-2 text-black">
                Lorem ipsum dolor sit amet consectetur. Vestibulum velit aliquet
                magnis dapibus dictum enim praesent.
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start">
                  <MdPhone className="bg-[#EC72AF] text-white size-9 rounded-full p-2" />
                  <a
                    href="tel:+1-281-607-5120"
                    className="mt-1 mx-2 text-black truncate w-72 tracking-wide"
                  >
                    0334 4635801
                  </a>
                </p>

                <p className="flex items-start">
                  <IoMail className="bg-[#EC72AF] text-white size-9 rounded-full p-2" />
                  <span className="mx-2 mt-1 text-black truncate w-72 text-wrap">
                    Fyb@gmail.com
                  </span>
                </p>

                <p className="flex items-start">
                  <MdLocationPin className="bg-[#EC72AF] text-white size-9 rounded-full p-2" />
                  <span className="mx-2 mt-1 text-black truncate w-72 text-wrap">
                    2155 Briarwood Drive Camden, NJ 08102
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-10 lg:ml-2">
                <h3 className="playfair text-black text-3xl font-bold">
                  Follow us
                </h3>
                <div className="flex items-center gap-x-5 mt-4">
                  <a
                    href="https://www.facebook.com/glowwithfyb/"
                    target="_blank"
                  >
                    <FaFacebook size={25} className="text-[#EC72AF]" />
                  </a>

                  <a
                    href="https://www.instagram.com/glowwithfyb/"
                    target="_blank"
                  >
                    <FaInstagram size={25} className="text-[#EC72AF]" />
                  </a>

                  {/* <a href="#" target="_blank">
                    <FaTwitter size={25} className="text-[#EC72AF]" />
                  </a>
                  <a href="#" target="_blank">
                    <FaLinkedin size={25} className="text-[#EC72AF]" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
