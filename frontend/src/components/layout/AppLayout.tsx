import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
