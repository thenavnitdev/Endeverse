import { motion } from 'framer-motion';
import Section from '@/components/Section';

export default function PrivacyPolicy() {
  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">PRIVACY POLICY</h1>
            <p className="text-xl text-gray-600 mb-8">個人情報保護方針</p>
            <p className="text-sm text-gray-500 mb-12">
              制定日: 2025年8月1日<br />
              最終改定日: 2025年8月1日
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: '個人情報の取得・利用・提供について',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                title: '法令・規範の遵守',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                title: '安全管理措置',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                title: '苦情および相談への対応',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                title: '継続的改善',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                title: 'お問い合わせ窓口',
                content: '〒170-0005 東京都豊島区南大塚2-26-7 ME新大塚ビル6F\n株式会社エンデバース 個人情報に関するお問い合わせ窓口\nTEL: 03-6902-0830'
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-bold">以上</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

