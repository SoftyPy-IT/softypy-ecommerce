import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import DemoProjects from "./DemoProjects";

export default function Projects() {
  return (
    <section
      className="relative bg-linear-to-b from-[#D2CBF1] to-[#D2E9D9]"
    >
      <div className="absolute inset-0  bg-[#F9FAFBCC]" />
      <div className="relative z-10">
        <Container className="px-2 2xl:p-0">
          <SectionTitle align="center" title="আমাদের তৈরি করা কিছু প্রোজেক্ট" highlightColor="bg-[#ad46ff]" />
          <DemoProjects />
        </Container>
      </div>
    </section>
  );
}
