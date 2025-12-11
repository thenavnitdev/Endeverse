import { motion } from 'framer-motion';
import Section from '@/components/Section';
import content from '@/data/content.json';

export default function Company() {
  const company = content.company;

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
              <h1 className="text-4xl font-bold">{company.title}</h1>
            </div>
          </motion.div>

          {/* Company Message */}
          <Section delay={0.2}>
            <h2 className="text-2xl font-bold mb-4">{company.message.title}</h2>
            <p className="text-gray-600 mb-2">{company.message.subtitle}</p>
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {company.message.content}
            </p>
          </Section>

          {/* Company Info */}
          <Section delay={0.4}>
            <h2 className="text-2xl font-bold mb-6">ABOUT US</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-2">企業名</p>
                <p className="mb-4">{company.info.companyName}</p>
                <p className="font-semibold mb-2">企業名(英字)</p>
                <p className="mb-4">{company.info.companyNameEn}</p>
                <p className="font-semibold mb-2">資本金</p>
                <p className="mb-4">{company.info.capital}</p>
                <p className="font-semibold mb-2">設立日</p>
                <p className="mb-4">{company.info.established}</p>
                <p className="font-semibold mb-2">電話番号</p>
                <p className="mb-4">{company.info.phone}</p>
              </div>
              <div>
                <p className="font-semibold mb-2">所在地</p>
                <p className="mb-4">{company.info.address}</p>
                <p className="font-semibold mb-2">代表取締役</p>
                <p className="mb-4">{company.info.representative}</p>
                <p className="font-semibold mb-2">URL</p>
                <p className="mb-4">
                  <a href={company.info.url} className="text-blue-600 hover:underline">
                    {company.info.url}
                  </a>
                </p>
                <p className="font-semibold mb-2">事業内容</p>
                <ul className="list-disc list-inside mb-4">
                  {company.info.business.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="font-semibold mb-2">取引銀行</p>
                <ul className="list-disc list-inside">
                  {company.info.banks.map((bank, index) => (
                    <li key={index}>{bank}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}

