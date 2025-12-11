import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import content from '@/data/content.json';

export default function RecruitmentService() {
  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">Recruitment Service</h1>
            <p className="text-xl text-gray-700 mb-4">
              成長を共にする、最適な人材との出会いを創る
            </p>
            <p className="text-lg text-gray-600 mb-12">
              エンデバースは、エンジニアを中心に幅広い人材紹介を行い 即戦力から将来性ある若手まで、成長を共にできる出会いを提供します
            </p>
          </motion.div>

          {/* Our Services */}
          <Section delay={0.2}>
            <h2 className="text-3xl font-bold mb-4">OUR SERVICES</h2>
            <p className="text-gray-600 mb-8">— サービス</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: '01', title: '未経験エンジニアの紹介', desc: 'ITスクール修了者やキャリアチェンジ希望者など、ポテンシャル層をご紹介します。' },
                { num: '02', title: 'インフラエンジニアの紹介', desc: 'サーバー構築・運用保守など、インフラ領域に強い人材を提供します。' },
                { num: '03', title: 'クラウドエンジニアの紹介', desc: 'AWS. Azure GCPなどのクラウド基盤設計から運用・保守まで、幅広く対応します。' },
                { num: '04', title: 'Web・アプリエンジニアの紹介', desc: 'Web・アプリなど幅広い領域の開発エンジニアをご紹介します。' },
                { num: '05', title: '業務システムエンジニアの紹介', desc: '基幹システム・業務支援ツール開発など、上流から下流まで対応します。' },
                { num: '06', title: 'その他職種の紹介', desc: '営業・事務・バックオフィスなど、非エンジニア職種にも対応します。' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-light p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold mr-4">{service.num} ✓</span>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-700">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Our Strength */}
          <Section delay={0.4}>
            <h2 className="text-3xl font-bold mb-4">OUR STRENGTH</h2>
            <p className="text-gray-600 mb-8">— サービスの強み</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '幅広い人材プール', desc: '未経験から10年以上の経験を持つエンジニアまで幅広く対応' },
                { title: 'マッチング精度の高さ', desc: 'スキルだけでなく価値やキャリア志向も考慮' },
                { title: '採用スピード', desc: '第ニーズにも迅速に対応し必要な人材を確保' },
                { title: '長期定着支援', desc: '採用後のフォローを通じて活躍と定着をサポート' },
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
                  <p className="text-gray-700">{strength.desc}</p>
                </motion.div>
              ))}
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

