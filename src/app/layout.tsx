import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'] });

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Quizy App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={'/'}
      appearance={{
        variables: {
          colorPrimary: '#febc06',
        },
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'bg-mybg antialiased',
            inter.className,
            oswald.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
