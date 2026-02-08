import Features from "@/app/components/features/Features";
import Feedback from "@/app/components/feedback/Feedback";
import Banner from "@/app/components/header/Banner";
import Package from "@/app/components/packages/Package";
import Projects from "@/app/components/projects/Projects";
import Promotional from "@/app/components/promotion/Promotional";
import QA from "@/app/components/question/QA";

export default function Home() {
  return (
    <>
      <Banner />
      <Projects />
      <Features />
      <Promotional/>
      <Feedback/>
      <QA/>
      <Package/>
    </>
  );
}
