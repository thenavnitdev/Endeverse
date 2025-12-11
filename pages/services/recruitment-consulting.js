import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import content from '@/data/content.json';

export default function RecruitmentConsultingService() {
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
              <h1 className="text-4xl font-bold">Recruitment Consulting Service</h1>
            </div>
            <p className="text-xl text-gray-700 mb-4">
              課題分析から定着支援まで、採用活動をトータルで支援します
            </p>
            <p className="text-lg text-gray-600 mb-12">
              エンデバースは、採用課題を抱える企業に対し 戦略設計から実行支援まで一気通貫で伴走します
            </p>
          </motion.div>

          {/* Our Services */}
          <Section delay={0.2}>
            <h2 className="text-3xl font-bold mb-4">OUR SERVICES</h2>
            <p className="text-gray-600 mb-8">— サービス</p>
            <div className="space-y-6">
              {[
                { num: '01', title: '採用戦略立案', desc: '採用市場や競合分析を踏まえ、最適な採用戦略を策定します' },
                { num: '02', title: '採用広報支援', desc: '求人広告、採用サイト、SNSなどを活用し、認知を最大化します' },
                { num: '03', title: '選考プロセス改善', desc: '書類選考~面接フローを最適化し、歩留まりを改善します' },
                { num: '04', title: '定着・育成支援', desc: '入社後の定着を見据え、オンボーディングや研修施策を設計します' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-light p-6 rounded-lg border-l-4 border-black"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold mr-4">{service.num} ✓</span>
                    <h3 className="text-xl font-bold">{service.title}</h3>
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
                { title: '課題分析に基づく戦略設計', desc: '採用市場。競合分析・自社状況を踏まえ データドリブンで課題を特定し 最適な戦略を策定します。' },
                { title: '採用プロセス全体の最適化', desc: '母集団形成から選考フロー設計 面接官トレーニングまで ボトルネックを明確化し改善します' },
                { title: '採用後の定着・育成までカバー', desc: '人材紹介・ITスクール事業と連携し 採用だけでなく入社後の早期戦力化まで 支援します' },
                { title: 'PDCAサイクルによる継続改善', desc: '一度きりの提案ではなく KPI設定。効果検証・改善施策の実行を 繰り返し、成果を最大化します' },
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
                  <p className="text-gray-700 leading-relaxed">{strength.desc}</p>
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

