'use client'

 import {motion} from 'framer-motion'
 import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const benefits = [
  {
    icon: '🥦',
    title: 'Свежие продукты',
    description: 'Ежедневно закупаем фермерские продукты'
  },
  {
    icon: '🚚',
    title: 'Быстрая доставка',
    description: 'Привозим в течение 2 часов после готовности'
  },
  {
    icon: '⚖️',
    title: 'Сбалансированный состав',
    description: 'Подсчет БЖУ и калорий для каждого блюда'
  },
];

 export default function Benefits() {
    const [ref, isIntersecting] = useIntersectionObserver();

    return (
        <section id='преимущества' className='py-20 bg-white'>
            <div className='container mx-auto px-6'>
                <motion.h2
                ref={ref}
                initial={{opacity: 0, y:20}}
                animate={isIntersecting ? {opacity: 1, y: 0} : {}}
                transition={{ duration: 0.6 }}
               className= 'text=4xl font-bold text-center text-gray-800 mb-12'
               >
                Наши преимущества
                </motion.h2>

                <div className='grid md:grid-cols-3 gap-8'>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{opacity: 0, y: 30}}
                            animate={isIntersecting ? {opacity: 1, y: 0} : {}}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            className='text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 hover:bg-white'
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className='text-4xl mb-4'>{benefit.icon}</div>
                            <h3 className='text-xl font-bold text-gray-800 mb-3'>
                                {benefit.title}
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}