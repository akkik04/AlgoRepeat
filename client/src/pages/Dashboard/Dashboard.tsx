import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';


const DashboardPage  = () => {

  const entryLinks = [
    { to: '/logout', label: 'Log Out' },
  ];
  return (
    <div className="min-h-screen">
      <Navbar links={entryLinks} isEntryPage={false} />
    </div>
  );
};

export default DashboardPage;
