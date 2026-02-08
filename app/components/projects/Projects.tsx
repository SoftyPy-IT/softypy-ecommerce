import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import DemoProjects from "./DemoProjects";
import bg from "@/public/assets/bg/vactor-bg.jpg";

export default function Projects() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#EBD6FB]/70" />

      {/* Content */}
      <div className="relative z-10">
        <Container className="px-2 2xl:p-0">
          <SectionTitle align="center" title="আমাদের তৈরি করা কিছু প্রোজেক্ট" />
          <DemoProjects />
        </Container>
      </div>
    </section>
  );
}
