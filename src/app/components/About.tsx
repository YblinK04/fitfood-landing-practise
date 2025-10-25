'use client'
import {motion} from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function About() {
    const [ref, isIntersecting] = useIntersectionObserver();

    return (
         <section id="о-нас" className="py-20 bg-white">
            <div className='container mx-auto px-6'>
                <motion.div
                ref={ref}
                initial={{opacity: 0, y:50}}
                animate={isIntersecting ? {opacity: 1, y:0} : {}}
                className='max-w-4xl mx-auto text-center'
                
                >
                    <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                        About fitfood

                    </h2>
                    <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                           Мы создаем сбалансированные рационы питания для тех, кто ценит свое здоровье и время. 
            Наша команда профессиональных диетологов и поваров готовит вкусные и полезные блюда 
            из свежих фермерских продуктов.
             </p>
           <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: '5+', text: 'лет опыта' },
              { number: '5000+', text: 'довольных клиентов' },
              { number: '4.9', text: 'рейтинг качества' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-500 mb-2">{item.number}</div>
                <div className="text-gray-600">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}