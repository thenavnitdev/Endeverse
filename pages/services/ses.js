import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import content from '@/data/content.json';

export default function SESService() {
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
              <span className="text-lg mr-4">SERVICES</span>
              <h1 className="text-4xl font-bold">System Engineering Service</h1>
            </div>
            <p className="text-xl text-gray-700 mb-4">
              IT人材 × ソリューションで、企業の成長を支える
            </p>
            <p className="text-lg text-gray-600 mb-12">
              お客様から構想、運用・保守まで一貫でサポート 幅広いIT人材とソリューションで確かな成果を届けます
            </p>
          </motion.div>

          {/* Our Services */}
          <Section delay={0.2}>
            <h2 className="text-3xl font-bold mb-4">OUR SERVICES</h2>
            <p className="text-gray-600 mb-8">— サービス</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">01 ✓</span>
                  <h3 className="text-xl font-bold">システム開発</h3>
                </div>
                <p className="text-gray-700 mb-2">Webアプリケーション開発 / ウェブサイト制作</p>
                <p className="text-gray-700 mb-2">プログラミング学習アプリ開発</p>
                <p className="text-gray-700 mb-2">BtoBウェブサイト制作</p>
                <p className="text-gray-700">対応言語: Java, PHP, Python, Ruby など</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">02 ✓</span>
                  <h3 className="text-xl font-bold">ITインフラ事業</h3>
                </div>
                <p className="text-gray-700 mb-2">メールサーバー / Webサーバー設計・構築・運用保守</p>
                <p className="text-gray-700">大規模から小規模まで柔軟に対応</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">03 ✓</span>
                  <h3 className="text-xl font-bold">ネットワーク事業</h3>
                </div>
                <p className="text-gray-700 mb-2">ネットワーク設計・構築・運用保守</p>
                <p className="text-gray-700">トラブル初動受付から階層分類、各種サポートデスクへのエスカレーションまで</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">04 ✓</span>
                  <h3 className="text-xl font-bold">テクニカルサポート事業</h3>
                </div>
                <p className="text-gray-700 mb-2">システム運用保守、ユーザーサポート</p>
                <p className="text-gray-700">安心のシステムで安定稼働をサポート</p>
              </div>
            </div>
          </Section>

          {/* Contact */}
          <Section delay={0.4}>
            <div className="text-center bg-gray-100 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <p className="text-lg text-gray-700 mb-8">
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

