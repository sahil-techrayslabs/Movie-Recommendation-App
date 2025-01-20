import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
