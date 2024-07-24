import "../global.scss";

import Layout from "@/components/Layout/Layout";
import HeroBanner from "@/components/Hero/HeroBanner";
import FeatureCards from "@/components/Features/FeatureCards";
import FeatureWithImage from "@/components/Features/FeatureWithImage";
import BlogCards from "@/components/Cards/BlogCards";
import HeroFooter from "@/components/Hero/HeroFooter";

export const metadata = {
  title: "Museum of Accessibility Woes - Accessible Version",
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
