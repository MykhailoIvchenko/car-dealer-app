import { DropdownItemType, IVehicleType } from '@/utils/common.types';
import { START_YEAR } from '@/utils/consts';

const getYearsList = (): string[] => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const years = [];

  for (let i = START_YEAR; i <= currentYear; i++) {
    years.push(i.toString());
  }

  return years;
};

const getYearsListAsDropdownOptions = (): DropdownItemType[] => {
  const years = getYearsList();

  const dropdownOptions = years.map((year) => ({
    value: year,
    label: year,
  }));

  return dropdownOptions;
};

const getVehicleTypesListAsDropdownOptions = (
  vehicleTypes: IVehicleType[],
): DropdownItemType[] => {
  return vehicleTypes.map((vehicleType) => ({
    label: vehicleType.makeName,
    value: vehicleType.makeId.toString(),
  }));
};

export const helperService = {
  getYearsList,
  getYearsListAsDropdownOptions,
  getVehicleTypesListAsDropdownOptions,
};
