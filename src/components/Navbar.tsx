import React from 'react';
import {images, icons} from '../assets';
import {navLinks} from '../constants';

export const Navbar = () => {
  return (
    <header className="padding-x padding-y absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={images.headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(navLink => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className="font-montserrat leading-normal text-lg ">
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={icons.hamburger} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
