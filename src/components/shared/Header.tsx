'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos <= 100 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
  

  return (
    <header
      className={`w-full border-b pl-4 pr-4 fixed top-0 transition-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="wrapper flex items-center justify-between bg-white">
        <Link href="/" className="w-36">
          <Image src="/assets/logo.png" width={80} height={38} alt="logo" />
        </Link>

        <nav className="md:flex md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
