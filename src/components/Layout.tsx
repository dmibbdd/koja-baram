import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  withFooter?: boolean;
}

export default function Layout({ children, withFooter = true }: LayoutProps) {
  return (
    <div className="min-h-full flex flex-col bg-[#E6DDCB]">
      <Navbar />
      <main className="flex-1">{children}</main>
      {withFooter && <Footer />}
    </div>
  );
}
