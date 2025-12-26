'use client';

import { useEffect, useState } from 'react';

const heroImages = [
  '/design1.png',
  '/design2.png',
  '/design3.png',
  '/design4.png',
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='mx-auto max-w-6xl px-4 pt-8 sm:pt-12'>
      <div className='relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_25px_60px_rgba(99,102,241,0.15)] sm:rounded-[40px]'>
        <div className='relative h-[260px] w-full overflow-hidden sm:h-[360px] lg:h-[420px]'>
          <div
            className='flex h-full transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Banner promo ${index + 1}`}
                className='h-full w-full flex-shrink-0 object-cover'
              />
            ))}
          </div>
        </div>

        <div className='absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2'>
          {heroImages.map((_, index) => (
            <button
              key={index}
              type='button'
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                index === activeIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Slide gambar ke-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
