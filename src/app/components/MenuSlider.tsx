'use client';
import { motion } from 'framer-motion';
import { useSlider } from '../hooks/useSlider';
import { MENU_ITEMS } from '../lib/constants';


export default function MenuSlider() {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(MENU_ITEMS.length);

  return (
    <section id="меню" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-800 mb-4"
        >
          Наше меню
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Ежедневно обновляемое меню от наших шеф-поваров
        </motion.p>

        <div className="relative max-w-4xl mx-auto">
       
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {MENU_ITEMS.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-full px-2">
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="md:flex">
                    
                      <div className="md:flex-shrink-0 md:w-1/2 relative">
                        <div className="h-64 md:h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                         
                          <div className="text-center">
                            <div className="text-4xl mb-2">
                              {item.category === 'завтрак' && '🥞'}
                              {item.category === 'обед' && '🍲'}
                              {item.category === 'ужин' && '🍽️'}
                            </div>
                            <p className="text-gray-600 font-semibold">{item.name}</p>
                          </div>
                          
                       
                          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      
                     
                      <div className="p-6 md:w-1/2 flex flex-col">
                        <div className="flex-1">
                          <div className="uppercase tracking-wide text-sm text-green-500 font-semibold mb-2">
                            {item.category}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                       
                        <div className="mt-6 space-y-3">
                          <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                            <div>
                              <span className="text-2xl font-bold text-gray-800">
                                {item.price} ₽
                              </span>
                              <span className="text-sm text-gray-500 ml-2">/ порция</span>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-gray-700">
                                {item.calories} ккал
                              </div>
                              <div className="text-xs text-gray-500">энергетическая ценность</div>
                            </div>
                          </div>
                          
                          <button 
                            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg hover:shadow-xl transform 
                            hover:scale-105 transition-all duration-200 cursor-pointer"
                            aria-label={`Добавить ${item.name} в корзину`}
                          >
                            Добавить в корзину
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

         
          <button 
            onClick={prevSlide}
            className="absolute cursor-pointer -left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-all z-10"
            aria-label="Предыдущий слайд"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute cursor-pointer -right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-all z-10"
            aria-label="Следующий слайд"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      
        <div className="flex justify-center mt-8 space-x-3">
          {MENU_ITEMS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
                index === currentIndex 
                  ? 'bg-green-500 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>

     
        <div className="flex justify-center mt-6 space-x-4 md:hidden">
          <button 
            onClick={prevSlide}
            className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Назад
          </button>
          <button 
            onClick={nextSlide}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Вперед
          </button>
        </div>
      </div>
    </section>
  );
}