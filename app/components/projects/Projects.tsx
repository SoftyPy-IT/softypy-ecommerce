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
      <div className="absolute inset-0 bg-linear-to-br from-[#540863]/70 via-indigo-900/70 to-violet-800/70" />

      {/* Content */}
      <div className="relative z-10">
        <Container className="px-2 2xl:p-0">
          <SectionTitle align="center" title="আমাদের তৈরি করা কিছু প্রোজেক্ট" className="text-white" />
          <DemoProjects />
        </Container>
      </div>
    </section>
  );
}
