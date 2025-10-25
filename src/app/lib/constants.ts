import { MenuItem, Benefit, Review, NavigationItem } from "@/app/types";

    export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: 'Свежие продукты',
    description: 'Ежедневно закупаем фермерские продукты',
    icon: '🥦',
    order: 1
  },

  {
    id: 2,
    title: 'Быстрая доставка',
    description: 'Привозим в течение 2 часов после готовности',
    icon: '🚚',
    order: 2
  },
  {
    id: 3,
    title: 'Сбалансированный состав',
    description: 'Подсчет БЖУ и калорий для каждого блюда',
    icon: '⚖️',
    order: 3
  },
  {
    id: 4,
    title: 'Индивидуальный подход',
    description: 'Учитываем ваши предпочтения и ограничения',
    icon: '🎯',
    order: 4
  },
];
 
export const REVIEWS: Review[] = [
  {
    id: 1,
    authorName: 'Анна Петрова',
    rating: 5,
    text: 'Заказываю уже 3 месяц, похудела на 5 кг! Еда вкусная и разнообразная.',
    date: '2025-01-15',
    avatarUrl: '/avatars/1.jpg',
  },
  {
    id: 2,
    authorName: 'Михаил Иванов',
    rating: 5,
    text: 'Отлично подходит для занятых людей. Экономлю время на готовке.',
    date: '2025-01-10',
    avatarUrl: '/avatars/2.jpg',
  },
  {
    id: 3,
    authorName: 'Елена Сидорова',
    rating: 4,
    text: 'Очень удобно, что можно выбрать разные программы питания.',
    date: '2025-01-08',
    avatarUrl: '/avatars/3.jpg',
  },
];
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Фитнес завтрак',
    description: 'Овсянка с ягодами, омлет и свежевыжатый сок',
    price: 350,
    calories: 320,
    image: '/images/breakfast.jpg',
    category: 'завтрак'
  },
  {
    id: 2,
    name: 'Бизнес-ланч',
    description: 'Куриная грудка с киноа и овощами на гриле',
    price: 450,
    calories: 420,
    image: '/images/lunch.jpg',
    category: 'обед'
  },
  {
    id: 3,
    name: 'Протеиновый ужин',
    description: 'Лосось с брокколи и бурым рисом',
    price: 520,
    calories: 380,
    image: '/images/dinner.jpg',
    category: 'ужин'
  },
];
export const NAVIGATION: NavigationItem [] = [
  { name: 'Главная', href: '#главная' },
  { name: 'О нас', href: '#о-нас' },
  { name: 'Меню', href: '#меню' },
  { name: 'Преимущества', href: '#преимущества' },
  { name: 'Отзывы', href: '#отзывы' },
  { name: 'Контакты', href: '#контакты' },
];
  