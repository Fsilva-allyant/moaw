import { Text } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/Forms/ContactForm";
import Form from "@/components/Forms/Form";

export const metadata = {
  title: "Contact Us",
  description: "TBD",
  // icons: { icon: "/favicon.svg" },
};

const Index = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default Index;
