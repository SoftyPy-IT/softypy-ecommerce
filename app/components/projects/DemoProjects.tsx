import { demoProjectData } from './demo-project-data'
import Image from 'next/image'
import Link from 'next/link'

export default function DemoProjects() {
  return (
    <section className="py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoProjectData.map((project) => (
          <div
            key={project._id}
            className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-[260px] w-full overflow-hidden bg-gray-100">
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Status Badge */}
              {project.themeStatus && (
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {project.themeStatus}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-5">
              <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
                {project.name}
              </h3>

              <Link
                href={project.demoUrl}
                target="_blank"
                className="inline-flex w-fit items-center gap-2  bg-[#F375C2]/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-[#F375C2]"
              >
                View Live Demo
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
