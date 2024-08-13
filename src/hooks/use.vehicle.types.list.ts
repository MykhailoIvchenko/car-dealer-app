import { useEffect, useState } from 'react';
import { vehiclesService } from '@/services/vehicles.service';
import { IVehicleType } from '@/utils/common.types';

type UseVehicleTypesListType = {
  isError: boolean;
  vehicleTypesList: IVehicleType[];
};

export const useVehicleTypesList = (): UseVehicleTypesListType => {
  const [isError, setIsError] = useState<boolean>(false);
  const [vehicleTypesList, setVehicleTypesList] = useState<IVehicleType[]>([]);

  const getVehicleTypesListAndSet = async (): Promise<void> => {
    try {
      const vehiclesTypes =
        await vehiclesService.getVehicleTypesAndConvertToDtos();

      setVehicleTypesList(vehiclesTypes);
    } catch (error: any) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getVehicleTypesListAndSet();
  }, []);

  return { isError, vehicleTypesList };
};
