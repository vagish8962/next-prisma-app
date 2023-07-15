import './globals.css';
import localFont from 'next/font/local';
import Navbar from './components/nav/Nav';

const fonts = localFont({ src: '../public/fonts/UnileverShilling.ttf' });

export const metadata = {
  title: 'Hap App',
  description: 'Generated by Hap',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={fonts.style}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
