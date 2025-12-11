import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import content from '@/data/content.json';

export default function ServicesIndex() {
  return (
    <div className="bg-light">
      <Section className="bg-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-8">{content.site.name}</h1>
            <p className="text-2xl text-gray-700 mb-16">
              IT×教育で関わる全ての人の可能性を最大化する
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link href="/business" className="block">
                  <div className="bg-white p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-black">
                    <h2 className="text-3xl font-bold mb-4 underline">BUSINESS</h2>
                    <p className="text-lg text-gray-600">法人向け</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/apply" className="block">
                  <div className="bg-white p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-black">
                    <h2 className="text-3xl font-bold mb-4 underline">RECRUIT</h2>
                    <p className="text-lg text-gray-600">採用情報</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

