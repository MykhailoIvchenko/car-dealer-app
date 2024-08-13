'use client';
import { IModelData, ModelParamsType } from '@/utils/common.types';
import ModelData from '../model.data/model.data';
import { useModels } from '@/hooks/use.models';
import DisplayError from '../display.error/display.error';
import GoHomeButton from '../go.home.button/go.home.button';

const FilterResult = ({ params }: { params: ModelParamsType }) => {
  const model = params.model;
  const year = params.year;

  const { isError, vehicleModels } = useModels(model, year);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Vehicle Models</h1>

      {isError ? (
        <DisplayError
          message="Something went wrong during the models loading"
          details="Try to reload page or write to the admin"
        />
      ) : (
        <>
          <div className="mb-4">
            {vehicleModels.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                {vehicleModels.map((model: IModelData) => (
                  <ModelData
                    key={model.modelName}
                    modelName={model.modelName}
                    makeName={model.makeName}
                  />
                ))}
              </ul>
            ) : (
              <p>No models found for this combination.</p>
            )}
          </div>

          <GoHomeButton />
        </>
      )}
    </div>
  );
};

export default FilterResult;
