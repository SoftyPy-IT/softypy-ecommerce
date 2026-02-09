import { feedbackData } from "./feedback-data";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <Container className="px-2 py-10 2xl:p-0">
      <SectionTitle
        title="গ্রাহকদের মতামত"
        subtitle="আমাদের প্ল্যাটফর্ম ব্যবহার করে গ্রাহকরা কীভাবে উপকৃত হচ্ছেন তা দেখুন।"
        align="center"
        highlightColor='bg-[#540863]'
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feedbackData.map((item) => (
          <FeedbackCard key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Feedback;
