import { feedbackData } from "./feedback-data";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const Feedback = () => {
  return (
    <Container className="px-2 py-10 2xl:p-0">
      <SectionTitle
        title="গ্রাহকদের মতামত"
        subtitle="আমাদের প্ল্যাটফর্ম ব্যবহার করে গ্রাহকরা কীভাবে উপকৃত হচ্ছেন তা দেখুন।"
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feedbackData.map((item) => (
          <article
            key={item._id}
            className="flex flex-col rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            {/* Logo */}
            <div className="mb-4 flex items-center justify-center h-16">
              <img
                src={item.images[0]}
                alt={`${item.name} logo`}
                className="max-h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Review */}
            <p className="mb-6 text-sm leading-relaxed text-gray-700 whitespace-pre-line">
              {item.review}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between border-t pt-4">
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <a
                  href={item.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Visit Website
                </a>
              </div>

              {item.facebookLink && (
                <a
                  href={item.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Facebook
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default Feedback;
