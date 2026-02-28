import Container from '@/app/components/shared/Container'
import SectionTitle from '../shared/SectionTitle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Overview from './Overview'
import Details from './Details'
import bg from "@/public/assets/section-image/section-bg-5.avif";

export default function Promotional() {
  return (
    <section
      className="py-10 relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container className="px-2 2xl:p-0">
        <div>
          <SectionTitle
            title="কেন সফটিপাই?"
            subtitle="বিস্তারিত জানতে ভিডিওটি দেখুন — আপনি নিজেই বুঝে যাবেন কেন আমাদের সলিউশন আলাদা!"
            align="center"
            highlightColor="bg-[#ad46ff]"
          />

          <div className="flex justify-center items-center">
            <Tabs defaultValue="overview">
              <div className="flex justify-center items-center">
                <TabsList variant="default" className="bg-[#ad46ff] my-4 rounded-none">
                  <TabsTrigger value="overview" className="text-white rounded-none">
                    সম্পর্কিত ভিডিও
                  </TabsTrigger>
                  <TabsTrigger value="details" className="text-white rounded-none">
                    বিস্তারিত
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="overview" className="w-full h-full">
                <Overview />
              </TabsContent>
              <TabsContent value="details">
                <Details />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
}

