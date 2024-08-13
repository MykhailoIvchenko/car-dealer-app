import { API_RESPONSE_FORMATS, API_ROUTE_SECTIONS } from '@/utils/enums';
import { apiService } from './api.service';
import {
  IVehicleFromApi,
  IVehiclesListApiResponse,
  IVehicleType,
} from '@/utils/common.types';

const makeVehicleTypeDto = (vehicleFromApi: IVehicleFromApi): IVehicleType => {
  return {
    makeId: vehicleFromApi.MakeId,
    makeName: vehicleFromApi.MakeName,
  };
};

const getVehicleTypesFromApi = async (): Promise<IVehicleFromApi[]> => {
  const url = `${API_ROUTE_SECTIONS.CARS_LIST}?${API_RESPONSE_FORMATS.JSON}`;

  const response: IVehiclesListApiResponse = await apiService.apiRequest(url);

  return response.Results;
};

const getVehicleTypesAndConvertToDtos = async (): Promise<IVehicleType[]> => {
  const vehiclesTypesFromApi = await getVehicleTypesFromApi();

  const vehiclesTypes = vehiclesTypesFromApi.map((vehicle) =>
    makeVehicleTypeDto(vehicle),
  );

  return vehiclesTypes;
};

export const vehiclesService = {
  getVehicleTypesAndConvertToDtos,
};
