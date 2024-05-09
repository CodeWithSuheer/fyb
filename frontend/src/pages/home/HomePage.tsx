import { useAppSelector } from "../../app/hooks";
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

const HomePage = () => {
  const allproducts = useAppSelector((state) => state.products.products);

  return (
    <>
      <HeroSection />

      <FeaturesLine />

      <OurCategory />

      <CtaSection />

      <LatestProducts allproducts={allproducts} />

      <AboutSection />

      <Skincare />

      <SecondCta />

      <HairCare />

      <Review />
    </>
  );
};

export default HomePage;
