import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import content from '@/data/content.json';

export default function HomeLanding() {
  const services = [
    {
      title: 'SES事業',
      description: '必要な時に、必要なスキルを',
      icon: '/images/SES事業.png',
      link: '/services/ses'
    },
    {
      title: 'ITスクール事業',
      description: '学びからキャリアを切り拓く',
      icon: '/images/ITスクール事業.png',
      link: '/services/it-school'
    },
    {
      title: '転職支援事業',
      description: '最適な人材との出会いを創る',
      icon: '/images/転職支援事業.png',
      link: '/services/recruitment'
    },
    {
      title: '採用コンサルティング事業',
      description: '戦略的な採用で未来を描く',
      icon: '/images/採用コンサルティング事業.png',
      link: '/services/recruitment-consulting'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8" style={{
              fontFamily: 'Meiryo, sans-serif',
              lineHeight: '1.3'
            }}>
              人とテクノロジーで<br />企業の成長を支える会社
            </h1>
          </motion.div>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">👥</span>
            </div>
            <span className="text-3xl font-bold">+</span>
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">⚙️</span>
            </div>
          </motion.div>

          {/* Introductory Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed" style={{
              fontFamily: 'Meiryo, sans-serif'
            }}>
              エンデバースは、人の努力とテクノロジーの力を組み合わせ、企業の成長と社会の発展を支援する「キャリアカンパニー」です。
            </p>
          </motion.div>

          {/* MVV Venn Diagram Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            {/* Left: Text Labels */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  Integrity・Growth・Challenge・Hospitality・Respect・Reflection を体現し、信頼と成長を追求する。
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  努力を正しく評価し価値に変え、IT×キャリア支援で一人ひとりの自己実現を後押しする。
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  挑戦する人が輝き、信頼される社会を当たり前に。目指すのは、クライアントにも仲間にも選ばれるキャリアカンパニー
                </p>
              </div>
            </motion.div>

            {/* Right: Venn Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64">
                {/* Mission Circle (Top) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-blue-600 bg-blue-600/20 flex items-center justify-center">
                  <span className="text-white font-bold" style={{ fontFamily: 'Meiryo, sans-serif' }}>Mission</span>
                </div>
                {/* Vision Circle (Bottom Left) */}
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border-4 border-blue-400 bg-blue-400/20 flex items-center justify-center">
                  <span className="text-white font-bold" style={{ fontFamily: 'Meiryo, sans-serif' }}>Vision</span>
                </div>
                {/* Value Circle (Bottom Right) */}
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-4 border-teal-400 bg-teal-400/20 flex items-center justify-center">
                  <span className="text-white font-bold" style={{ fontFamily: 'Meiryo, sans-serif' }}>Value</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* For More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <Link href="/mvv" className="btn">
              For More &gt;
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Our Services Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              Our Services
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              エンデバースは、人材とテクノロジーの力を融合させ、企業の多様な課題に応じた最適なソリューションを提供しています。SES事業、人材紹介事業、ITスクール事業、採用コンサルティング事業を通じて、クライアントの持続的な成長を支援します。
            </p>
          </motion.div>

          {/* Service Blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  {service.description}
                </p>
                <Link href={service.link} className="text-black underline hover:opacity-80 transition-opacity text-sm" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                  For More &gt;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              About Us
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>企業名</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>株式会社エンデバース</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>企業名(英字)</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>Endeverse Inc.</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>資本金</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>10,000,000円</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>設立日</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>2022年10月26日</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>電話番号</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>03-6902-0830</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>所在地</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>〒170-0005 豊島区南大塚2-26-7 ME新大塚ビル6F</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>代表取締役</p>
                  <p className="text-gray-700" style={{ fontFamily: 'Meiryo, sans-serif' }}>百瀬将悟</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>URL</p>
                  <p className="text-gray-700">
                    <a href="https://endeverse.co.jp" className="text-blue-600 hover:underline" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                      https://endeverse.co.jp
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>事業内容</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    <li>システムインテグレーション (SI)事業</li>
                    <li>ITスクール事業</li>
                    <li>労働者派遣事業 許可番号 派13-318137</li>
                    <li>有料職業紹介事業 許可番号 13-ユ-315027</li>
                    <li>採用コンサルティング事業</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2" style={{ fontFamily: 'Meiryo, sans-serif' }}>取引銀行</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1" style={{ fontFamily: 'Meiryo, sans-serif' }}>
                    <li>みずほ銀行 神田支店</li>
                    <li>りそな銀行 赤坂支店</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              Contact
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: 'Meiryo, sans-serif' }}>
              サービスに関するご相談・お見積り・資料請求は、下記フォームよりお気軽にお問い合わせください。採用情報をご希望の方は、Recruit (採用情報) ページをご覧ください。
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn">
                Contact Us
              </Link>
              <Link href="/apply" className="btn">
                Recruit(採用情報)
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

