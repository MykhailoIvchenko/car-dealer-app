import { useEffect, useState } from 'react';
import { IModelData } from '@/utils/common.types';
import { modelService } from '@/services/model.service';

type UseModelsListType = {
  isError: boolean;
  vehicleModels: IModelData[];
};

export const useModels = (model: string, year: string): UseModelsListType => {
  const [isError, setIsError] = useState<boolean>(false);
  const [vehicleModels, setvehicleModels] = useState<IModelData[]>([]);

  const getModelsListAndSet = async (): Promise<void> => {
    try {
      const models = await modelService.getModelsAndConvertToDtos(model, year);

      setvehicleModels(models);
    } catch (error: any) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (model && year) {
      getModelsListAndSet();
    }
  }, [model, year]);

  return { isError, vehicleModels };
};
