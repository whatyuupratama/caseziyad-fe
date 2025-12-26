import React from 'react';
import Icon from '@/components/ui/icon';

const bookCategories = [
  'Action',
  'Adventure',
  'Comedy',
  'Crime',
  'Drama',
  'Fantasy',
  'Horror',
];

const quickLinks = [
  'About Us',
  'Contact Us',
  'Products',
  'Login',
  'Sign Up',
  'Cart',
  'Checkout',
];

const Footer = () => {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-10'>
        <div className='grid gap-12 md:grid-cols-[1.2fr_2fr]'>
          <div className='space-y-6'>
            <div className='flex items-center gap-3'>
              <Icon />
            </div>

            <p className='max-w-sm text-sm leading-relaxed text-slate-500'>
              Platform penjualan buku modern dengan koleksi pilihan dan
              pengiriman cepat ke seluruh Indonesia.
            </p>

            <div>
              <p className='text-sm font-semibold text-black'>Follow Us</p>
              <div className='mt-4 flex gap-3'>
                {['Fb', 'Yt', 'Tw', 'Ln', 'Ig'].map((label) => (
                  <a
                    key={label}
                    className='flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-blue-900 transition '
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-wide text-slate-900'>
                Book Categories
              </p>
              <ul className='mt-5 space-y-2 text-sm text-slate-500'>
                {bookCategories.map((item) => (
                  <li
                    key={item}
                    className='cursor-pointer transition hover:text-purple-600'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-wide text-slate-900'>
                Quick Links
              </p>
              <ul className='mt-5 space-y-2 text-sm text-slate-500'>
                {quickLinks.map((item) => (
                  <li
                    key={item}
                    className='cursor-pointer transition hover:text-purple-600'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='text-sm font-semibold uppercase tracking-wide text-slate-900'>
                Our Store
              </p>

              <div className='mt-5 space-y-3 text-sm text-slate-500'>
                <p>
                  Jl. Banyuanyar Selatan No. 4 Rt 002 Rw 012, Banyuanyar,
                  Banjarsari, Surakarta, Jawa Tengah
                </p>
                <p>0271-727027</p>
                <p>official@ziyadbooks.com</p>
                <div className='overflow-hidden rounded-2xl border border-slate-200'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.329844579374!2d110.80157107610046!3d-7.538959474420322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a141cd054f1c5%3A0xa0ee5ea4ee756c66!2sZiyadbooks!5e0!3m2!1sid!2sid!4v1766742033913!5m2!1sid!2sid'
                    className='h-40 w-full border-0'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
          <p>
            &copy; {new Date().getFullYear()} Ziyadbooks. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-purple-600'>
              Privacy
            </a>
            <a href='#' className='hover:text-purple-600'>
              Terms
            </a>
            <a href='#' className='hover:text-purple-600'>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
