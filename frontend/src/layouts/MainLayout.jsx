import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = ({ children, ...topbarProps }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Topbar {...topbarProps} />
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
