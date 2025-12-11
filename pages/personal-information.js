import { motion } from 'framer-motion';
import Section from '@/components/Section';

export default function PersonalInformation() {
  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">HANDLING OF PERSONAL INFORMATION</h1>
            <p className="text-xl text-gray-600 mb-12">個人情報の取扱いについて</p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              株式会社エンデバース(以下、「当社」といいます)は、お客様からお預かりする個人情報を適切に保護・管理することを社会的責務と認識し、以下の方針に基づき個人情報を取り扱います。
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: '組織の名称',
                content: '株式会社エンデバース'
              },
              {
                number: '2',
                title: '個人情報保護管理者',
                content: '代表取締役 百瀬 将悟\nTEL: 03-6902-0830'
              },
              {
                number: '3',
                title: '個人情報の利用目的',
                content: '当社は、以下の目的の範囲内で個人情報を利用いたします。\n• お問い合わせ内容に適切に対応するため\n• 当社サービスに関するご案内やサポートを行うため\n• サービス品質向上や新サービス検討のための分析に利用する場合'
              },
              {
                number: '4',
                title: '個人情報の第三者提供',
                content: '当社は、以下の場合を除き、取得した個人情報を第三者へ提供いたしません。\n• ご本人の同意がある場合\n• 法令に基づく場合\n• 人の生命・身体または財産の保護のために必要で、ご本人の同意を得ることが困難な場合'
              },
              {
                number: '5',
                title: '個人情報の取り扱いの委託',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                number: '6',
                title: '個人情報の開示等の請求',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                number: '7',
                title: '個人情報の提供の任意性',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                number: '8',
                title: 'Cookie等による情報の取得',
                content: 'テキストが入ります。テキストが入ります。テキストが入ります。'
              },
              {
                number: '9',
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
                className="flex items-start"
              >
                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-purple-700">{section.number}</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
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

