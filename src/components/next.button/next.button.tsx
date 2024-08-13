import { useRouter } from 'next/navigation';
import React from 'react';

type NextButtonType = {
  selectedVehicleTypeId: string;
  selectedYear: string;
};

const NextButton: React.FC<NextButtonType> = ({
  selectedVehicleTypeId,
  selectedYear,
}) => {
  const router = useRouter();

  const handleNextClick = () => {
    router.push(`result/${selectedVehicleTypeId}/${selectedYear}`);
  };
  return (
    <button
      className={`p-2 bg-blue-500 text-white rounded ${
        !selectedVehicleTypeId || !selectedYear
          ? 'opacity-50 cursor-not-allowed'
          : ''
      }`}
      onClick={handleNextClick}
      disabled={!selectedVehicleTypeId || !selectedYear}
    >
      Next
    </button>
  );
};

export default NextButton;
