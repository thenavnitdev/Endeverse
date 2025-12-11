import { motion } from 'framer-motion';
import Section from '@/components/Section';
import content from '@/data/content.json';

export default function MVV() {
  const mvv = content.mvv;

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
            <h1 className="text-4xl font-bold mb-8">{mvv.title}</h1>
          </motion.div>

          {/* Mission */}
          <Section delay={0.2}>
            <div className="text-center mb-12">
              <div className="w-32 h-1 bg-black mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Mission</h2>
              <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">{mvv.mission.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {mvv.mission.content}
              </p>
            </div>
          </Section>

          {/* Vision */}
          <Section delay={0.4}>
            <div className="text-center mb-12">
              <div className="w-32 h-1 bg-black mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Vision</h2>
              <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">{mvv.vision.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {mvv.vision.content}
              </p>
            </div>
          </Section>

          {/* Values */}
          <Section delay={0.6}>
            <div className="text-center mb-12">
              <div className="w-32 h-1 bg-black mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">Values</h2>
              <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {mvv.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold mr-4">{value.number}</span>
                    <div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-gray-600 text-sm">({value.titleEn})</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{value.content}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}

