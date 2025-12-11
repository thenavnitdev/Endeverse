import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import content from '@/data/content.json';

export default function About() {
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
              <h1 className="text-4xl font-bold">ABOUT US</h1>
            </div>
          </motion.div>

          {/* Greetings Section */}
          <Section delay={0.2}>
            <div className="text-center mb-12">
              <div className="w-32 h-1 bg-black mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold mb-4">Greetings</h2>
              <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
              <div className="flex justify-center gap-8 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-24 h-24 rounded-full bg-gray-300"></div>
                ))}
              </div>
              <Link href="/company" className="btn btn-primary">
                企業について詳しく知る
              </Link>
            </div>
          </Section>

          {/* 3 Strengths */}
          <Section delay={0.4}>
            <div className="text-center mb-12">
              <div className="w-32 h-1 bg-black mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold mb-4">3つの魅力</h2>
              <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { icon: '💰', title: '評価アップにつながる仕組み', metric: '昇給率 70%' },
                { icon: '🎯', title: '選べる働き方・キャリア', desc: 'SES事業・システムインフラ構築運用・自社オフィス用務・通勤サイトSRE保守' },
                { icon: '🤝', title: '伴走型フォローアップ', metric: '面談回数 4回以上/月' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-light p-6 rounded-lg text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  {item.metric && (
                    <p className="text-2xl font-bold text-blue-600">{item.metric}</p>
                  )}
                  {item.desc && (
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/why-join-us" className="btn btn-primary">
                魅力について詳しく知る
              </Link>
            </div>
          </Section>

          {/* MVV Preview */}
          <Section delay={0.6}>
            <div className="text-center mb-12">
              <div className="w-32 h-1 bg-black mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold mb-8">MVV</h2>
              <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </p>
                <Link href="/mvv" className="btn btn-primary">
                  MVVについて詳しく知る
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}

