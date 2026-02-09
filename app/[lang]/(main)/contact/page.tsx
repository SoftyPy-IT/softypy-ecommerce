import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import ContactUs from "@/app/components/shared/forms/ContactUs";

export default function page() {
  return (

    <Container className="px-2 2xl:px-0">
      <SectionTitle title="Contact Us" subtitle="Get in touch with us" align="center" highlightColor="bg-[#540863]" />
      <ContactUs />
    </Container>
  )
}
