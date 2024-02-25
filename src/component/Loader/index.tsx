import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      document.body.classList.add('overflow-hidden');

      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }
  }, [isClient]);
 
  return isClient ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="loader ease-linear border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12"></div>
    </div>
  ) : null;
};

export default Loader;