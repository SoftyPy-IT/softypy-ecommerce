import Container from '@/app/components/shared/Container'
import SectionTitle from '../shared/SectionTitle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Overview from './Overview'
import Details from './Details'

export default function Promotional() {
  return (
    <section className='py-10 bg-[#FEEBF6]'>
      <Container className="px-2 2xl:p-0">
        <div>
          <SectionTitle
            title='স্পেশাল অফার'
            subtitle='বিস্তারিত জানতে ভিডিওটি দেখুন — আপনি নিজেই বুঝে যাবেন কেন আমাদের সলিউশন আলাদা!'
            align='center'
          />

          <div className='flex justify-center items-center'>
            <Tabs defaultValue="overview">
              <TabsList variant="default" className='bg-pink-300 my-4' >
                <TabsTrigger value="overview">সম্পর্কিত ভিডিও</TabsTrigger>
                <TabsTrigger value="details">বিস্তারিত</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="w-full h-full"><Overview /></TabsContent>
              <TabsContent value="details"><Details /></TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  )
}

