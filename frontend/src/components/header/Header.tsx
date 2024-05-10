import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Dropdown, Button } from "keep-react";
import { getCartTotal } from "../../features/ActionsSlice";
import {
  ArrowLeft,
  MagnifyingGlass,
  ShoppingCart,
  UserCircle,
} from "phosphor-react";
import { logoutUserAsync } from "../../features/authSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { cart, totalQuantity } = useAppSelector((state) => state.actions);
  const data = useAppSelector((state) => state.auth.user);
  const user = data?.user;
  const login = data?.login;

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const navigation = [
    { title: "Home", path: "" },
    { title: "Shop", path: "products" },
    { title: "About Us", path: "about" },
    { title: "Contact Us", path: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUserAsync());
  };

  return (
    <>
      {/* BANNER */}
      <div className="w-full bg-[#FDEDF5] px-5">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex justify-between items-center flex-wrap flex-col sm:flex-row">
          <div className="banner py-2 text-center hidden sm:block text-[13px] xl:text-[14px] tracking-wide font-normal">
            Free Delivery In Pakistan
          </div>
          <div className="banner py-2 text-center text-[13px] xl:text-[14px] tracking-wide font-normal">
            Free Delivery In Pakistan
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="flex py-1 lg:py-3 px-4 sm:px-7 bg-[#fff] md:min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 w-full">
          <Link
            to="/"
            className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <div className="img_border p-1 bg-[#EB72AF] w-16 h-16 lg:w-[7.5rem] lg:h-[7.5rem] xl:w-[9.5rem] xl:h-[9.5rem] rounded-full overflow-hidden border-8 border-white">
              <img
                className=""
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-04-27_at_12.11.46_AM.jpg?v=1714497650"
                alt=""
              />
            </div>
          </Link>

          <div
            className={` lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="collapseMenu"
          >
            {/* RIGHT SIDE MENU LINK */}
            <ul className=" lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              {isMenuOpen ? (
                <li
                  onClick={closeMenu}
                  className="crimson flex justify-end items-center gap-1 underline underline-offset-4 text-gray-800 font-semibold text-[18px]"
                >
                  <ArrowLeft size={20} />
                </li>
              ) : null}

              {navigation.map((data, index) => (
                <li key={index} className="max-lg:border-b max-lg:py-3 mr-2 ">
                  <Link
                    to={`${data.path}`}
                    className="crimson hover:underline hover:underline-offset-4 text-gray-800 block font-semibold text-[18px]"
                    onClick={closeMenu}
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEFT SIDE BUTTONS */}
          <div className="flex items-center ml-auto space-x-6 sm:space-x-7">
            {/* cart */}
            <Link to="/cart" className="relative">
              <span className="relative">
                <ShoppingCart size={26} className="text-gray-700" />
                <span className="absolute -right-1 -top-2.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {totalQuantity}
                </span>
              </span>
            </Link>

            {/* search */}
            <button className="">
              <MagnifyingGlass size={26} className="text-gray-700 -mr-2" />
            </button>

            {/* profile */}
            {/* <Link to="/profile" className="">
              {login && user ? (
                user?.name
              ) : (
                <UserCircle size={28} className="text-gray-700" />
              )}
            </Link> */}

            {/* DROPDOWN */}
            {windowWidth > 426 &&
              (login && user ? (
                <Dropdown
                  showArrow
                  action={
                    <Button className="-py-0 px-1 bg-white text-black hover:bg-white hover:text-black hover:underline hover:underline-offset-2 text-lg font-normal">
                      {user?.name}
                    </Button>
                  }
                  actionClassName="border-none"
                >
                  <Dropdown.List className="">
                    <Dropdown.Item className="p-0 flex flex-col hover:bg-white">
                      <Link
                        to="/profile"
                        className="py-1 font-medium text-metal-800 mx-auto text-center hover:underline underline-offset-2"
                      >
                        User Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="py-1 font-medium text-metal-800 mx-auto text-center hover:underline underline-offset-2"
                      >
                        Order Tracking
                      </Link>
                      <p
                        onClick={handleLogout}
                        className="py-1 font-medium text-metal-800 mx-auto text-center hover:underline underline-offset-2"
                      >
                        Sign out
                      </p>
                    </Dropdown.Item>
                  </Dropdown.List>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <UserCircle size={28} className="text-gray-700" />
                </Link>
              ))}

            <button className="lg:hidden" id="toggleOpen" onClick={toggleMenu}>
              <MdOutlineMenu size={26} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
