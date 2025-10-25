import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

 const inter = Inter ({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
 });

 const robotoMono = Roboto_Mono ({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
 });

  export const metadata: Metadata = {
    title: {
      default: "FitFood - Здоровое питание на дом",
      template: "%s | FitFood",
    },
    description: "FitFood - ваш надежный партнер в здоровом питании с доставкой на дом. Мы предлагаем разнообразные и вкусные блюда, приготовленные из свежих и натуральных ингредиентов, чтобы поддерживать ваш активный образ жизни.",
     keywords: 'здоровое питание, доставка еды, фитнес еда, правильное питание, готовые рационы',
     authors: [{name: 'FitFood'}],
     openGraph: {
      title: "FitFood - Здоровое питание на дом",
      description: "Баланс питания для активного образа жизни.",
      type: 'website',
      locale: 'ru_RU',
      siteName: 'FitFood',
     },
       robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
