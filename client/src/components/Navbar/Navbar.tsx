import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  links: { to: string; label: string }[];
  isEntryPage: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ links, isEntryPage }) => {
  const navigate = useNavigate();

  const handleRedirect = (to: string) => {
    if (isEntryPage && to === '/') {
      navigate('/');
    } else if (!isEntryPage && to === '/') {
      navigate('/dashboard');
    } else {
      navigate(to);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-10">
      <div className="flex justify-between items-center px-16 py-4 sm:px-4">
        <div onClick={() => handleRedirect('/')}>
          <h2 className="text-2xl font-bold font-inter cursor-pointer">AlgoRepeat</h2>
        </div>
        <div className="flex items-center gap-4">
          {links.map(({ to, label }) => (
            <button
              key={to}
              onClick={() => handleRedirect(to)}
              className="text-black p-2 cursor-pointer transition-all duration-300 hover:border-gray-300 border border-transparent rounded-full hover:bg-gray-100"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
