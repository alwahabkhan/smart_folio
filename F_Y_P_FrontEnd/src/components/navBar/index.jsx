import { Container } from '@mui/system';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <Container className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-secondary text-2xl font-semibold">Our Logo</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-secondary hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-secondary hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-secondary hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="text-secondary hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
