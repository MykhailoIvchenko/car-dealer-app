import {
  IModelData,
  IModelDataFromApi,
  IveModelsListApiResponse,
} from '@/utils/common.types';
import { API_RESPONSE_FORMATS, API_ROUTE_SECTIONS } from '@/utils/enums';
import { apiService } from './api.service';

const makeModelDto = (modelFromApi: IModelDataFromApi): IModelData => {
  return {
    makeName: modelFromApi.Make_Name,
    modelName: modelFromApi.Model_Name,
  };
};

const getModelsFromApi = async (
  model: string,
  year: string,
): Promise<IModelDataFromApi[]> => {
  const url = `${API_ROUTE_SECTIONS.MODELS_LiST}${API_ROUTE_SECTIONS.MAKE_ID}/${model}/${API_ROUTE_SECTIONS.MODEL_YEAR}/${year}?${API_RESPONSE_FORMATS.JSON}`;

  const response: IveModelsListApiResponse = await apiService.apiRequest(url);

  return response.Results;
};

const getModelsAndConvertToDtos = async (
  model: string,
  year: string,
): Promise<IModelData[]> => {
  const modelsFromApi = await getModelsFromApi(model, year);

  const models = modelsFromApi.map((modelFromApi) =>
    makeModelDto(modelFromApi),
  );

  return models;
};

export const modelService = {
  getModelsAndConvertToDtos,
};
