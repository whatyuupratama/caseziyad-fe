import React from 'react';
const navItems = ['Beranda', 'Layanan', 'Kontak', 'Koleksi'];
import Icon from '@/components/ui/icon';
const Header = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-[#f7f6fd]/90 backdrop-blur-md '>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-5'>
        <Icon />

        <div className='hidden items-center gap-3 sm:flex'>
          <nav className='hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex'>
            {navItems.map((item) => (
              <a
                key={item}
                href='#'
                className='transition hover:text-slate-900'
              >
                {item}
              </a>
            ))}
          </nav>
          <button className='rounded-xl border border-blue-100 bg-white px-5 py-2 text-sm font-semibold text-blue-900 shadow-sm transition hover:border-blue-200 cursor-pointer'>
            Masuk
          </button>
          <button className='rounded-xl bg-blue-900 px-5 py-2 text-sm font-semibold text-white  cursor-pointer transition hover:bg-blue-800'>
            Daftar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
