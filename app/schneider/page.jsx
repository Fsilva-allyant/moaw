import "../global.scss";

import LayoutNA from "@/components/Layout/LayoutNA";
import HeroBannerNA from "@/components/Hero/HeroBannerNA";
import FeatureCardsNA from "@/components/Features/FeatureCardsNA";
import FeatureWithImageNA from "@/components/Features/FeatureWithImageNA";
import BlogCardsNA from "@/components/Cards/BlogCardsNA";
import HeroFooterNA from "@/components/Hero/HeroFooterNA";

export const metadata = {
  title: "Schneider Labs",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  return (
    <LayoutNA
      layout={{
        logo: {
          header: "/schn_dark.png",
          footer: "/schn_light.png",
        },
        theme: "#3DCD58",
      }}
    >
      <HeroBannerNA />
      <FeatureCardsNA />
      <FeatureWithImageNA />
      <BlogCardsNA />
      <HeroFooterNA />
    </LayoutNA>
  );
};

export default Index;
