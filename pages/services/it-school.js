import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import content from '@/data/content.json';

export default function ITSchoolService() {
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
              <h1 className="text-4xl font-bold">IT School Service</h1>
            </div>
            <p className="text-xl text-gray-700 mb-4">
              採用から育成まで、一気通貫で支援
            </p>
            <p className="text-lg text-gray-600 mb-12">
              エンデバースのITスクールは、採用から育成までを一気通貫で支援し 企業の成長を加速させます
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
                  <h3 className="text-xl font-bold">IT人材採用支援</h3>
                </div>
                <p className="text-gray-700">企業ニーズに合わせた適切な人材をご紹介。ネットワークとスキル診断を活用し、採用精度を向上させます。</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">02 ✓</span>
                  <h3 className="text-xl font-bold">法人向け研修プログラム</h3>
                </div>
                <p className="text-gray-700">CCNA、LPIC、AWS、Pythonなどのカリキュラムを提供。完全アニメーション教材で初心者でも安心して学習できます。</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">03 ✓</span>
                  <h3 className="text-xl font-bold">定着・キャリア支援</h3>
                </div>
                <p className="text-gray-700">入社後のフォローアップとキャリアロードマップ設計をサポートし、早期離職を防ぎ、従業員の成長を支援します。</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-4">04 ✓</span>
                  <h3 className="text-xl font-bold">伴走型コンサルティング</h3>
                </div>
                <p className="text-gray-700">採用から育成まで一貫して伴走。採用強化、人材育成、定着支援を通じて組織力を強化します。</p>
              </div>
            </div>
          </Section>

          {/* Training Content */}
          <Section delay={0.4}>
            <h2 className="text-3xl font-bold mb-8">研修内容</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ネットワーク/サーバー研修</h3>
                <p className="text-gray-700">CCNA / CCNP / LPIC / LinuC など</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">クラウド研修</h3>
                <p className="text-gray-700">AWSソリューションアーキテクト / Azure Fundamentals AZ-900 / Azure Administrator / Associate: AZ-104 など</p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary">カリキュラム詳細を見る</button>
            </div>
          </Section>

          {/* Contact */}
          <Section delay={0.6}>
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

