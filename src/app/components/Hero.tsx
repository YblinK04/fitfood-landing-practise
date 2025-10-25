
'use client';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Hero() {
  const { scrollToSection } = useSmoothScroll();

  const handleOrderClick = () => {
    scrollToSection('меню');
  };

  return (
    <section id="главная" className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Здоровое питание
          <motion.span 
            className="block text-green-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            с доставкой
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Сбалансированные рационы для активной жизни. Готовьтесь к лету вместе с нами!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={handleOrderClick}
            className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 cursor-pointer"
          >
            Выбрать рацион
          </button>
          <button 
            onClick={() => scrollToSection('контакты')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors transform hover:scale-105 cursor-pointer"
          >
            Бесплатная консультация
          </button>
        </motion.div>
      </div>
    </section>
  );
}