import "./global.scss";
import IndexPage from "@/components/IndexPage";

export const metadata = {
  title: "Museum of Accessibility Woes",
  description: "TBD",
  icons: { icon: "/images/favicon.svg" },
};

const Index = () => {
  return (
    <main id="main-index">
      <IndexPage />
    </main>
  );
};

export default Index;
