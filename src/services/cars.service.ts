const makeCarDto = (carFromApi: ICarFromApi): ICar => {
  return {
    makeId: carFromApi.MakeId,
    makeName: carFromApi.MakeName,
    vehicleTypeId: carFromApi.VehicleTypeId,
    vehicleTypeName: carFromApi.VehicleTypeName,
  };
};

const carsService = {
  makeCarDto,
};
