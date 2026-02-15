"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { feedbackData } from "./feedback-data";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-16 lg:py-24">
      <Container className="px-4 2xl:px-0">
        <SectionTitle
          title="গ্রাহকদের মতামত"
          subtitle="আমাদের প্ল্যাটফর্ম ব্যবহার করে গ্রাহকরা কীভাবে উপকৃত হচ্ছেন তা দেখুন।"
          align="center"
          highlightColor="bg-[#ad46ff]"
        />

        <div className="mt-14">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
          >
            {feedbackData.map((item) => (
              <SwiperSlide
                key={item._id}
              >
                <FeedbackCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
