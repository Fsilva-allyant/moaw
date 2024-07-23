import "../global.scss";

import Layout from "@/components/Layout/LayoutNA";
import HeroBanner from "@/components/Hero/HeroBannerNA";
import FeatureCards from "@/components/Features/FeatureCardsNA";
import FeatureWithImage from "@/components/Features/FeatureWithImageNA";
import BlogCards from "@/components/Cards/BlogCardsNA";
import HeroFooter from "@/components/Hero/HeroFooterNA";

export const metadata = {
  title: "Museum of Accessibility Woes - Not Accessible Version",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeatureCards />
      <FeatureWithImage />
      <BlogCards />
      <HeroFooter />
    </Layout>
  );
};

export default Index;
