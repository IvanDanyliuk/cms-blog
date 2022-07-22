import React from 'react';
import { ILayout } from '../types';
import { Header } from './';


const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;