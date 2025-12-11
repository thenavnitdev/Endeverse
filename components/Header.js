import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import content from '@/data/content.json';

export default function Header() {
  const router = useRouter();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/home-landing', label: 'LANDING' },
    { path: '/company', label: 'COMPANY' },
    { path: '/business', label: 'BUSINESS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header 
      className="bg-gray-100 py-4 px-6 md:px-8"
      style={{
        backgroundColor: '#f5f5f5',
        backgroundImage: 'linear-gradient(to bottom, rgba(245, 245, 245, 0.8), rgba(250, 250, 250, 0.8))'
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Company Name */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/images/logo2.png"
            alt={content.site.name}
            width={180}
            height={54}
            className="object-contain"
            priority
            style={{
              height: 'auto',
              width: 'auto',
              maxHeight: '54px'
            }}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-black hover:opacity-80 transition-opacity uppercase underline decoration-1 underline-offset-4"
              style={{
                fontFamily: 'Meiryo, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.05em',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '4px'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
