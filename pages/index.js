import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import content from '@/data/content.json';

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
      style={{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability with subtle texture */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(250, 250, 250, 0.75)',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(240, 240, 240, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(240, 240, 240, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)
          `
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 md:mb-6"
        >
          <div className="flex justify-center">
            <Image
              src="/images/logo2.png"
              alt={content.site.name}
              width={600}
              height={180}
              className="object-contain"
              priority
              style={{
                maxWidth: '90%',
                height: 'auto',
                width: 'auto'
              }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-24 md:mb-32"
        >
          <p 
            className="text-black max-w-4xl mx-auto"
            style={{
              fontFamily: 'Meiryo, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: '1.7'
            }}
          >
            IT×教育で関わる全ての人の可能性を最大化する
          </p>
        </motion.div>

        {/* Navigation Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* BUSINESS Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/business" className="block text-center group">
                <div className="bg-transparent">
                  <h2 
                    className="text-black mb-3 underline decoration-2 underline-offset-4 group-hover:decoration-black/90 transition-colors"
                    style={{
                      fontFamily: 'Meiryo, sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    BUSINESS
                  </h2>
                  <p 
                    className="text-black mt-1"
                    style={{
                      fontFamily: 'Meiryo, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: 'normal',
                      lineHeight: '1.5'
                    }}
                  >
                    法人向け
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* RECRUIT Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/apply" className="block text-center group">
                <div className="bg-transparent">
                  <h2 
                    className="text-black mb-3 underline decoration-2 underline-offset-4 group-hover:decoration-black/90 transition-colors"
                    style={{
                      fontFamily: 'Meiryo, sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    RECRUIT
                  </h2>
                  <p 
                    className="text-black mt-1"
                    style={{
                      fontFamily: 'Meiryo, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: 'normal',
                      lineHeight: '1.5'
                    }}
                  >
                    採用情報
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
