import Image from 'next/image';
import type { SectionHeadingProps } from '@/types/components';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  showIcon = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col gap-3 ${
        isCenter ? 'items-center text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <p className='text-xl font-bold uppercase text-blue-900'>{eyebrow}</p>
      )}

      <div
        className={`flex items-center gap-3 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        {showIcon && (
          <Image src='/icon.png' alt='Ikon bagian' width={36} height={36} />
        )}

        <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={`text-base text-slate-500 ${isCenter ? 'max-w-2xl' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
