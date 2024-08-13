import FilterResult from '@/components/filter.result/filter.result';
import Loader from '@/components/loader/loader';
import { helperService } from '@/services/helper.service';
import { vehiclesService } from '@/services/vehicles.service';
import { ModelParamsType } from '@/utils/common.types';
import { Suspense } from 'react';

export const generateStaticParams = async (): Promise<ModelParamsType[]> => {
  const vehicleTypes = await vehiclesService.getVehicleTypesAndConvertToDtos();

  const years = helperService.getYearsList();

  const params: ModelParamsType[] = [];

  years.forEach((year) =>
    vehicleTypes.forEach((vehicleType) => {
      params.push({
        year: year.toString(),
        model: vehicleType.makeId.toString(),
      });
    }),
  );

  return params;
};

const ResultPage = ({ params }: { params: ModelParamsType }) => {
  return (
    <Suspense fallback={<Loader />}>
      <FilterResult params={params} />
    </Suspense>
  );
};

export default ResultPage;
