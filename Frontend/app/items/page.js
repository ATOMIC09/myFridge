'use client'

import React, { useState, useEffect } from 'react';
import 'app/globals.css';
import Sidebar from './sidebar.jsx';
import MenuBar from './menubar.jsx';
import ItemsFrame from './itemsframe.jsx';

export default function Items() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen width and set the state
    function checkScreenWidth() {
      setIsSmallScreen(window.innerWidth < 1095);
    }

    // Add an event listener for screen width changes
    window.addEventListener('resize', checkScreenWidth);

    // Call the function initially
    checkScreenWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div className="font-Manrope">
      {isSmallScreen ? (
        <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
          <span role="img" aria-label="Pray" className="text-6xl p-5">🙏</span>
          <p className="text-center px-10 text-[20px]">Sorry, your device is not supported. Please use a tablet or a computer, or change the text size in your web browser.</p>
        </div>
      ) : (
        <>
          <div className="gradient-background">
          <MenuBar />
          <div className="hidden 2xl:flex">
            <div className="w-96 2xl:w-1/4 p-10">
              <Sidebar />
            </div>
            <div className="w-3/4 pt-10 pb-10 pr-10">
              <ItemsFrame />
            </div>
          </div>
          <div className="flex 2xl:hidden">
            <div className="w-full p-10">
              <ItemsFrame />
            </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
