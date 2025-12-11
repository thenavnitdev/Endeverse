import { motion } from 'framer-motion';
import Section from '@/components/Section';

export default function Benefits() {
  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-black mr-4"></div>
              <h1 className="text-4xl font-bold">福利厚生・制度</h1>
            </div>
          </motion.div>

          <div className="space-y-8">
            <Section delay={0.2}>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">休日・休暇</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>年間休日:125日</li>
                <li>休日:土日祝休み (完全週休2日制)</li>
                <li>年間休日120日以上・5日以上の連続休暇も取得OK</li>
              </ul>
              <div className="mt-4">
                <h3 className="font-bold mb-2">【休暇制度】</h3>
                <p className="text-gray-700">
                  有給休暇、年末年始休暇、GW休暇、産休・育休、介護休暇、特別休暇、夏季休暇、慶弔休暇
                </p>
              </div>
            </Section>

            <Section delay={0.4}>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">受動喫煙対策</h2>
              <p className="text-gray-700">
                対策あり(原則禁煙/喫煙目的の専用スペースあり)
              </p>
            </Section>

            <Section delay={0.6}>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">福利厚生・各種制度</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>社会保険完備(雇用・労災・健康・厚生年金)</li>
                <li>交通費支給(月上限3万円)</li>
                <li>住宅手当・役職手当・家族手当・資格手当あり</li>
                <li>残業手当(超過分を全額支給)</li>
                <li>子供手当(1人につき月3,000円)</li>
                <li>インセンティブ制度</li>
                <li>定期健康診断(年1回)</li>
                <li>服装自由(オフィスカジュアル)</li>
                <li>社内表彰制度</li>
                <li>資格取得費用補助制度</li>
                <li>社内レクリエーション・イベントあり</li>
                <li>社内研修・入社研修(自社ITスクール利用可)</li>
                <li>メンターメンティ制度(先輩社員がフォローアップ)</li>
              </ul>
            </Section>
          </div>
        </div>
      </Section>
    </div>
  );
}

