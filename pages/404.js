import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Large faded logo in background */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10">
          <Image
            src="/images/logo2.png"
            alt="Endeverse"
            width={800}
            height={240}
            className="object-contain"
            style={{
              filter: 'blur(2px)',
              transform: 'rotate(-5deg)'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-black mb-4" style={{ fontFamily: 'Meiryo, sans-serif' }}>
            404
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-2xl md:text-3xl text-black mb-8" style={{ fontFamily: 'Meiryo, sans-serif' }}>
            This page could not be found.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <button 
              onClick={() => router.back()} 
              className="btn"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

