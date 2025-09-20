import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* The Outlet component will render the page content based on the active route */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Layout;
