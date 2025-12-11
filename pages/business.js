import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import content from '@/data/content.json';

export default function Business() {
  const business = content.business;

  // Map service titles to correct paths
  const serviceLinks = {
    'SES事業': '/services/ses',
    'ITスクール事業': '/services/it-school',
    '転職支援事業': '/services/recruitment',
    '採用コンサルティング事業': '/services/recruitment-consulting'
  };

  // Map service titles to icons
  const serviceIcons = {
    'SES事業': '/images/SES事業.png',
    'ITスクール事業': '/images/ITスクール事業.png',
    '転職支援事業': '/images/転職支援事業.png',
    '採用コンサルティング事業': '/images/採用コンサルティング事業.png'
  };

  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-black mr-4"></div>
              <h1 className="text-4xl font-bold" style={{ fontFamily: 'Meiryo, sans-serif' }}>{business.title}</h1>
            </div>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              {business.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {business.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={serviceIcons[service.title] || '/images/SES事業.png'}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  {service.description}
                </p>
                <Link 
                  href={serviceLinks[service.title] || '/services/ses'} 
                  className="text-black underline hover:opacity-80 transition-opacity text-sm inline-block"
                  style={{ fontFamily: 'Meiryo, sans-serif' }}
                >
                  For More &gt;
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Link to Landing Page */}
          <div className="text-center mb-8">
            <Link href="/home-landing" className="btn btn-primary">
              View Full Landing Page &gt;
            </Link>
          </div>

          {/* Contact Section */}
          <Section delay={0.6}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-1 bg-black mr-4"></div>
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'Meiryo, sans-serif' }}>Contact</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                {content.contact.description}
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link href="/apply" className="btn">
                  Recruit(採用情報)
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}
