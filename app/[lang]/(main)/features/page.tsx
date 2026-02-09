import FeatureCard from '@/app/components/features/FeatureCard'
import { features } from '@/app/components/features/features-data'
import Container from '@/app/components/shared/Container'
import bg from "@/public/assets/section-image/section-bg.gif";

export default function page() {
  return (
    <section className="relative py-10" style={{ backgroundImage: `url(${bg.src})` }}>
      <Container className="px-2 2xl:px-0">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
    </Container>
   </section>
  )
}
