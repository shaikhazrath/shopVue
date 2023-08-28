import React from 'react';
import { Icon } from '@iconify/react';


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Icon icon="tabler:error-404-off" color="red" width="100" />

      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for does not exist.</p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFound;