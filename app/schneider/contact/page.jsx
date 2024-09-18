import LayoutNA from "@/components/Layout/LayoutNA";
import ContactFormNA from "@/components/Forms/ContactFormNA";

export const metadata = {
  title: "Schneider",
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
      <ContactFormNA theme={"#3DCD58"} />
    </LayoutNA>
  );
};

export default Index;
