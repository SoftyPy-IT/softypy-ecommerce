'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  highlightColor?: string;
  icon?: ReactNode;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'left',
  className,
  highlightColor = 'bg-white',
  icon,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        'w-full py-8',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {/* Highlight Bar */}
      <div
        className={cn(
          'h-1 w-10 rounded-full mb-3',
          highlightColor,
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto'
        )}
      />

      <div
        className={cn(
          'flex items-center gap-2',
          align === 'center' && 'justify-center',
          align === 'right' && 'justify-end'
        )}
      >
        {/* Icon (optional) */}
        {icon && <span className="text-2xl">{icon}</span>}

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Subtitle */}
      {subtitle && <p className="mt-1 text-sm md:text-base">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
