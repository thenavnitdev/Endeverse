import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Link from 'next/link';
import { useState } from 'react';
import content from '@/data/content.json';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('送信中...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('送信完了しました！');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      setStatus('エラーが発生しました。もう一度お試しください。');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-light">
      <Section className="bg-white">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-black mr-4"></div>
              <h1 className="text-4xl font-bold">CONTACT</h1>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {content.contact.description}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                {content.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                {content.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-semibold">
                {content.contact.form.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                {content.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            {status && (
              <div className={`p-4 rounded-lg ${status.includes('完了') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              className="w-full btn btn-primary py-3"
            >
              {content.contact.form.submit}
            </button>
          </motion.form>

          <div className="mt-8 text-center">
            <Link href="/apply" className="btn">
              Recruit(採用情報)
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

