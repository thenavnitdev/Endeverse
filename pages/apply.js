import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

export default function Apply() {
  const positions = [
    {
      title: '研修エンジニア',
      description: 'テキストが入ります。テキストが入ります。',
      image: '/images/job-training-engineer.jpg',
      link: '/contact'
    },
    {
      title: '営業',
      description: 'テキストが入ります。テキストが入ります。',
      image: '/images/job-sales.jpg',
      link: '/contact'
    },
    {
      title: 'その他',
      description: 'テキストが入ります。テキストが入ります。',
      image: '/images/job-other.jpg',
      link: '/contact'
    }
  ];

  const handleEntry = () => {
    // You can add form submission or redirect logic here
    window.location.href = '/contact';
    // Or open a modal, form, etc.
  };

  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              採用情報
            </h1>
            <p className="text-xl text-gray-700 mb-12" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              エンデバースでは、様々な職種で人材を募集しています。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={position.image}
                    alt={position.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    {position.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    {position.description}
                  </p>
                  <Link href={position.link} className="block">
                    <button className="w-full btn btn-primary text-sm hover:bg-gray-800 transition-colors" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      募集要項 &gt;
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              ご応募は、下記のエントリーボタンよりお願いいたします。
            </p>
            <button 
              onClick={handleEntry}
              className="btn btn-primary text-lg px-12 py-4 hover:bg-gray-800 transition-colors cursor-pointer" 
              style={{ fontFamily: 'Meiryo, sans-serif' }}
            >
              エントリー
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
