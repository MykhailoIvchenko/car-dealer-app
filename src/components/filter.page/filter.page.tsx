import React, { useState } from 'react';
import VehicleTypesSelect from '../vehicle.types.select/vehicle.types.select';
import { useVehicleTypesList } from '@/hooks/use.vehicle.types.list';
import YearSelect from '../year.select/year.select';
import DisplayError from '../display.error/display.error';
import NextButton from '../next.button/next.button';

const FilterPage = () => {
  const [selectedVehicleTypeId, setSelectedVehicleTypeId] = useState<
    string | null
  >(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const { isError, vehicleTypesList } = useVehicleTypesList();

  return (
    <div className="flex flex-col space-y-4">
      {isError ? (
        <DisplayError
          message={'Something went wrong during vehicles loading'}
        />
      ) : (
        <>
          <VehicleTypesSelect
            vehicleTypes={vehicleTypesList}
            selectedVehicleTypeId={selectedVehicleTypeId}
            setSelectedVehicleTypeId={setSelectedVehicleTypeId}
          />

          <YearSelect
            selectedYear={selectedYear}
            selectYear={setSelectedYear}
          />

          <NextButton
            selectedVehicleTypeId={selectedVehicleTypeId || ''}
            selectedYear={selectedYear || ''}
          />
        </>
      )}
    </div>
  );
};

export default FilterPage;
