import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex justify-center items-center  h-screen'>
      <Loader size={32} className="animate-spin text-[#1fafbe]" />
    </div>
  )
}
