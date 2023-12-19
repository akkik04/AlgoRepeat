import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import useLogOut from '../../hooks/useLogOut';

const DashboardPage = () => {
  const { logout } = useLogOut();

  const entryLinks = [
    { to: '/logout', label: 'Log Out', onClick: logout },
  ];

  return (
    <div className="min-h-screen">
      <Navbar links={entryLinks} isEntryPage={false} />
      {/* Your dashboard content */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
