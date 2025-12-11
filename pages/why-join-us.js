import { motion } from 'framer-motion';
import Section from '@/components/Section';
import content from '@/data/content.json';

export default function WhyJoinUs() {
  const page = content.whyJoinUs;

  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {page.intro}
            </p>
          </motion.div>

          {page.sections.map((section, index) => (
            <Section key={index} delay={index * 0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-purple-700">{section.number}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <ul className="list-disc list-inside ml-20 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            </Section>
          ))}
        </div>
      </Section>
    </div>
  );
}

