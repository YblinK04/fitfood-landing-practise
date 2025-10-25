export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-xl font-bold">FitFood</span>
            </div>
            <p className="text-gray-400">
              Здоровое питание с доставкой на каждый день
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Меню</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#главная" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#меню" className="hover:text-white transition-colors">Меню</a></li>
              <li><a href="#отзывы" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (999) 999-99-99</li>
              <li>info@fitfood.ru</li>
              <li>Москва, ул. Мск, 123</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              {['Instagram', 'VK', 'Telegram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 FitFood. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}