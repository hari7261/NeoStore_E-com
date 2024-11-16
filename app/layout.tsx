import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/components/CartContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NeoStore | E-com',
  description: 'Experience the future of online shopping with our cutting-edge e-commerce platform',
  // Correct path for logo in the public folder
  icons: {
    icon: './images/Neostore-removebg-preview.png', // Set your logo image here
  },
  openGraph: {
    title: 'NeoStore | E-com',
    description: 'Experience the future of online shopping with our cutting-edge e-commerce platform',
    images: ['./images/Neostore-removebg-preview.png'], // Logo image for Open Graph
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeoStore | E-com',
    description: 'Experience the future of online shopping with our cutting-edge e-commerce platform',
    images: ['./images/Neostore-removebg-preview.png'], // Logo image for Twitter Card
  },
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ensure CartProvider wraps everything that uses useCart */}
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
