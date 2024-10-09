import LayoutNA from "@/components/Layout/LayoutNA";
import ContactFormNA from "@/components/Forms/ContactFormNA";

export const metadata = {
  title: "Contact Us",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  return (
    <LayoutNA>
      <ContactFormNA />
    </LayoutNA>
  );
};

export default Index;
