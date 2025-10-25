// app/(components)/sections/Header.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION } from '../lib/constants';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigationClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleOrderClick = () => {
    scrollToSection('меню');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('главная')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              FitFood
            </span>
          </motion.div>

          
          <ul className="hidden md:flex space-x-8">
            {NAVIGATION.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavigationClick(item.href)}
                  className={`font-medium transition-colors hover:text-green-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>

         
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleOrderClick}
            className={`hidden sm:block px-6 py-3 rounded-full font-semibold transition-all cursor-pointer ${
              isScrolled 
                ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105' 
                : 'bg-white text-gray-800 hover:bg-gray-100 transform hover:scale-105'
            }`}
          >
            Заказать
          </motion.button>

          
          <button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

    
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          >
            <ul className="py-4 space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigationClick(item.href)}
                    className="block w-full text-left px-6 py-3 text-gray-800 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={handleOrderClick}
                  className="w-full mx-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105"
                >
                  Заказать
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
}