import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const MainLayout = ({ children, userRole = null, hideFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userRole={userRole} />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
