'use client'

import { motion } from 'framer-motion';
import { REVIEWS } from '../lib/constants';

export default function Reviews() {
  return (
    <section id="отзывы" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Отзывы клиентов
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {review.authorName.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">{review.authorName}</div>
                  <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                </div>
              </div>
             
              <p className="text-gray-600 italic">&quot;{review.text}&quot;</p>
              <div className="text-sm text-gray-500 mt-4">{review.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}