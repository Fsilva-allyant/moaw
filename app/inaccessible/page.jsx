import "../global.scss";

import LayoutNA from "@/components/Layout/LayoutNA";
import HeroBannerNA from "@/components/Hero/HeroBannerNA";
import FeatureCardsNA from "@/components/Features/FeatureCardsNA";
import FeatureWithImageNA from "@/components/Features/FeatureWithImageNA";
import BlogCardsNA from "@/components/Cards/BlogCardsNA";
import HeroFooterNA from "@/components/Hero/HeroFooterNA";

export const metadata = {
  title: "Museum of Accessibility Woes - Not Accessible Version",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  return (
    <LayoutNA>
      <HeroBannerNA />
      <FeatureCardsNA />
      <FeatureWithImageNA />
      <BlogCardsNA />
      <HeroFooterNA />
    </LayoutNA>
  );
};

export default Index;
