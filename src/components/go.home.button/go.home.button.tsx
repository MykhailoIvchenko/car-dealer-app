import React from 'react';
import { useRouter } from 'next/navigation';

const GoHomeButton: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <button
      onClick={handleGoHome}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Go Home
    </button>
  );
};

export default GoHomeButton;
