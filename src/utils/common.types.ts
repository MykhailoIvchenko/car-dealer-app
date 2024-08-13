export interface IVehicleFromApi {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IVehicleType {
  makeId: number;
  makeName: string;
}

export interface IVehiclesListApiResponse {
  Count: number;
  Message: number;
  SearchCriteria: string;
  Results: IVehicleFromApi[];
}

export interface IModelDataFromApi {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface IModelData {
  makeName: string;
  modelName: string;
}

export interface IveModelsListApiResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IModelDataFromApi[];
}

export type DropdownValueType = string;
export type DropdownLabelType = string;

export type DropdownItemType = {
  value: DropdownValueType;
  label: DropdownLabelType;
};

export type ModelParamsType = {
  model: string;
  year: string;
};
