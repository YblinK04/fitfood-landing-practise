'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ContactFormData } from '../types';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    alert('Спасибо! Ваша заявка отправлена.');
  };

  return (
    <section id="контакты" className="py-20 bg-white relative z-10">
      {/* Декоративный фон для визуального разделения */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Оставить заявку
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Заполните форму и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                  Имя *
                </label>
                <input
                  {...register('name', { required: 'Имя обязательно' })}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Введите ваше имя"
                />
                {errors.name && (
                  <p className="mt-3 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email обязателен',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Введите корректный email'
                      }
                    })}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-3 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                    Телефон *
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Телефон обязателен',
                      pattern: {
                        value: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                        message: 'Введите корректный номер телефона'
                      }
                    })}
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="+7 (999) 999-99-99"
                  />
                  {errors.phone && (
                    <p className="mt-3 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Сообщение (необязательно)
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover:border-gray-300 resize-none"
                  placeholder="Расскажите о ваших предпочтениях в питании, аллергиях или специальных требованиях..."
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    Максимум 500 символов
                  </span>
                  <span className="text-sm text-gray-400">
                    Необязательное поле
                  </span>
                </div>
              </div>

              {/* Контейнер для кнопки с дополнительными отступами */}
              <div className="pt-8 pb-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    'Отправить заявку'
                  )}
                </motion.button>
                
                {/* Дополнительная информация под кнопкой */}
                <p className="text-center text-gray-500 text-sm mt-6">
                  Нажимая кнопку, вы соглашаетесь с {' '}
                  <a href="#" className="text-green-500 hover:text-green-600 underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Дополнительный контактный блок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8 text-gray-600">
              <div className="p-6 rounded-2xl bg-gray-50">
                <div className="text-2xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-800 mb-2">Телефон</h3>
                <p>+7 (999) 999-99-99</p>
                <p className="text-sm text-gray-500 mt-1">Ежедневно 9:00-21:00</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50">
                <div className="text-2xl mb-3">✉️</div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p>info@fitfood.ru</p>
                <p className="text-sm text-gray-500 mt-1">Ответим в течение часа</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50">
                <div className="text-2xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-800 mb-2">Мессенджеры</h3>
                <p>Telegram, WhatsApp</p>
                <p className="text-sm text-gray-500 mt-1">Онлайн-консультация</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Большой отступ перед футером */}
      <div className="h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}