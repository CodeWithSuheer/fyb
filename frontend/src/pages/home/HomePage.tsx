import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AboutSection from "./AboutSection";
import CtaSection from "./CtaSection";
import FeaturesLine from "./FeaturesLine";
import HairCare from "./HairCare";
import HeroSection from "./HeroSection";
import LatestProducts from "./LatestProducts";
import OurCategory from "./OurCategory";
import Review from "./Review";
import SecondCta from "./SecondCta";
import Skincare from "./Skincare";
import { Helmet } from "react-helmet";
import { getallOrderAsync } from "../../features/orderSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const allproducts = useAppSelector((state) => state.products.products);
  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  useEffect(() => {
    if (userID) {
      const id = userID;
      dispatch(getallOrderAsync(id));
    }
  }, [userID, dispatch]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>For Your Beauty</title>
      </Helmet>

      <HeroSection />

      <FeaturesLine />

      <OurCategory />

      <CtaSection />

      <LatestProducts allproducts={allproducts} />

      <AboutSection />

      <Skincare allproducts={allproducts} />

      <SecondCta />

      <HairCare allproducts={allproducts} />

      <Review />
    </>
  );
};

export default HomePage;
