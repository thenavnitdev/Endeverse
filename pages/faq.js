import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '選考フローを教えてください',
      answer: 'ポジションによりますが、基本「書類選考→1次面接+適性検査→最終面接→内定」となります。サイト上部、もしくは下部にある「エントリーボタン」よりご応募ください。内容を確認し担当者より連絡いたします。'
    },
    {
      question: 'オンラインでの面接は可能ですか?',
      answer: 'はい、オンラインでの面接も可能です。ご希望に応じて柔軟に対応しておりますので、ご応募後にお気軽にご相談ください。'
    },
    {
      question: 'リモートワークはありますか?',
      answer: 'はい、可能です。職種や業務内容に応じて、週1~2日の在宅勤務を取り入れるなど、柔軟な働き方を推進しています。また、フレックスタイム制や副業可など、多様な働き方を支援する制度も整備されています。具体的な勤務形態やリモートワークの頻度については、職種やプロジェクトによって異なる場合がありますので、詳細は各求人情報をご確認いただくか、採用担当者へお問い合わせください。※入社当初は業務に慣れていただくことを目的に週5日オフィス勤務を期待しますが、業務内容に応じて出勤日数やタイミングについては相談可能です。'
    },
    {
      question: '応募に際し、必要なスキルや経験はありますか?',
      answer: '職種によって異なりますので、詳細は各求人情報をご確認いただくか、採用担当者へお問い合わせください。'
    },
    {
      question: '入社時に準備しておくものはありますか?',
      answer: '基本的には、業務に必要なPCや、営業・開発などで使用するインカム (スマートフォン端末、イヤホンマイク等)については、会社から貸与いたしますので、ご自身で特別な機材をご用意いただく必要はありません。入社前にご準備いただく書類やアカウント情報などの詳細については、採用決定後に人事より改めてご案内させていただきます。なお、リモートワークがある職種の場合は、ご自宅にインターネット環境が整っていることをお願いしております。そのほか不明点がありましたら、お気軽にご相談ください。'
    }
  ];

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
              <h1 className="text-4xl font-bold">FAQ</h1>
            </div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold flex items-center">
                    <span className="mr-3">▼</span>
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

