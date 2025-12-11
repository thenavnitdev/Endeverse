import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';

export default function Culture() {
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
              <h1 className="text-4xl font-bold">CULTURE</h1>
            </div>
          </motion.div>

          {/* Hero Image Section */}
          <Section delay={0.2}>
            <div className="relative h-96 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h2 className="text-3xl font-bold mb-4">福利厚生・制度</h2>
                <p className="text-xl mb-4">仕事も、私生活も どちらも大切に</p>
                <p className="text-lg max-w-2xl mx-auto">
                  エンデバースでは、安心して長く働けるよう、充実した福利厚生と柔軟な制度を 整えています。 「働きやすさ」と「自分らしさ」を両立できる環境で、キャリアもプライベート も充実させてください。
                </p>
                <Link href="/benefits" className="btn btn-primary mt-6 inline-block">
                  For More &gt;
                </Link>
              </div>
            </div>
          </Section>

          {/* Culture Content */}
          <Section delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-light p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-4">評価アップにつながる仕組み</h3>
                <p className="text-gray-700 mb-4">テキストが入ります。テキストが入ります。テキストが入ります。</p>
                <p className="text-2xl font-bold text-blue-600">昇給率 70%</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-light p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">選べる働き方・キャリア</h3>
                <p className="text-gray-700 mb-4">テキストが入ります。テキストが入ります。テキストが入ります。</p>
                <p className="text-sm text-gray-600">SES事業・システムインフラ構築運用・自社オフィス用務・通勤サイトSRE保守</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-light p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4">伴走型フォローアップ</h3>
                <p className="text-gray-700 mb-4">テキストが入ります。テキストが入ります。テキストが入ります。</p>
                <p className="text-2xl font-bold text-blue-600">面談回数 4回以上/月</p>
              </motion.div>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}

