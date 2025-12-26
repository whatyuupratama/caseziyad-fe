'use client';

import { useEffect, useState } from 'react';

const heroImages = ['/design1.png', '/design2.png', '/design3.png', '/design4.png'];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='mx-auto max-w-6xl px-4 pt-6 sm:pt-12'>
      <div className='relative overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_20px_50px_rgba(99,102,241,0.12)] sm:rounded-[40px]'>
        <div className='relative h-[210px] w-full overflow-hidden sm:h-[320px] md:h-[360px] lg:h-[420px]'>
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

        <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6'>
          {heroImages.map((_, index) => (
            <button
              key={index}
              type='button'
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full border border-white transition sm:h-2.5 sm:w-2.5 ${
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
