import LayoutNA from "@/components/Layout/LayoutNA";
import ContactFormNA from "@/components/Forms/ContactFormNA";

export const metadata = {
  title: "Schneider",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  const schneiderProps = {
    logo: {
      header: "/schn_dark.png",
      footer: "/schn_light.png",
    },
    theme: "#3DCD58",
  };
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
      <ContactFormNA />
    </LayoutNA>
  );
};

export default Index;
