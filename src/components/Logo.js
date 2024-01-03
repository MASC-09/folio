// Logo.js
import React from 'react';

const Logo = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="50"
      viewBox="0 0 150 150"
    >
      {/* Background */}
      <rect width="100%" height="100%" fill="#005c97" />
      
      {/* Abstract Book Shape */}
      <rect x="50" y="10" width="100" height="100" fill="#ff7f50" />
      <rect x="90" y="15" width="50" height="50" fill="#ffffff" />
      <rect x="125" y="20" width="10" height="10" fill="#005c97" />
    </svg>
  );
};

export default Logo;
