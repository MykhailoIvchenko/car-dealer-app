'use client';

import { helperService } from '@/services/helper.service';
import Dropdown from '../dropdown/dropdown';
import { DropdownValueType, IVehicleType } from '@/utils/common.types';

type VehicleTypesSelectType = {
  selectedVehicleTypeId: string | null;
  vehicleTypes: IVehicleType[];
  setSelectedVehicleTypeId: React.Dispatch<React.SetStateAction<string | null>>;
};

const VehicleTypesSelect: React.FC<VehicleTypesSelectType> = ({
  vehicleTypes,
  selectedVehicleTypeId,
  setSelectedVehicleTypeId,
}) => {
  const handleVehicleTypeSelect = (vehicleType: DropdownValueType) => {
    setSelectedVehicleTypeId(vehicleType);
  };

  return (
    <Dropdown
      selectedItem={selectedVehicleTypeId}
      title={'Select vehicle'}
      items={helperService.getVehicleTypesListAsDropdownOptions(vehicleTypes)}
      handleOptionClick={handleVehicleTypeSelect}
    />
  );
};

export default VehicleTypesSelect;
