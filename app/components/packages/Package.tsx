'use client';
import { ArrowRight, Check, X } from 'lucide-react';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import { plans } from './package-data';
import bg from '@/public/assets/section-image/section-bg-4.webp';
import Link from 'next/link';
import LinearButton from '../shared/actions/LinearButton';

export default function Package() {
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
      <div className="absolute inset-0 bg-linear-to-br from-white/90 via-white/80 to-white/90" />
      <Container className="py-10 px-2 2xl:p-0 relative z-10">
        <SectionTitle
          title="আমাদের প্যাকেজসমূহ"
          subtitle="আপনার ব্যবসার জন্য সেরা প্যাকেজটি বেছে নিন।"
          align="center"
          highlightColor="bg-[#ad46ff]"
        />

        <div className="grid gap-8 md:grid-cols-2 mt-12 ">
          {plans.map((plan, idx) => {
            return (
              <div key={idx} className={`relative flex flex-col h-160 border p-6 transition-all`}>
                {/* Header */}
                <div className="bg-linear-to-br from-[#ad46ff] to-[#5c9e70] p-4 mb-4">
                  <div className='space-y-4 py-2'>
                    <h3 className="text-white text-2xl font-semibold">{plan.title}</h3>
                    <p className="text-white/80 text-2xl font-bold">{plan.price}</p>
                  </div>
                  <p className="text-white/80 text-sm">{plan.description}</p>
                </div>

                {/* Features - scrollable */}
                <ul className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="text-green-500 flex-none mt-1" />
                      ) : (
                        <X className="text-gray-400 flex-none mt-1" />
                      )}
                      <span
                        className={
                          feature.included ? 'text-gray-800' : 'text-gray-400 line-through'
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={'https://softypy.com/contact'} target="_blank">
                  <LinearButton title="শুরু করুন" icon={<ArrowRight />} iconAlign="right" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
