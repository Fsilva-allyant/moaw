import "./global.scss";

import FeatureWithImage from "@/components/Features/FeatureWithImage";

export const metadata = {
  title: "Museum of Accessibility Woes",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  return (
    <main id="main-index">
      <FeatureWithImage />
    </main>
  );
};

export default Index;
