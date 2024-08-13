import { IModelData } from '@/utils/common.types';
import React from 'react';

const ModelData: React.FC<IModelData> = ({ makeName, modelName }) => {
  return (
    <div className="p-8 bg-white rounded shadow">
      {makeName} {modelName}
    </div>
  );
};

export default ModelData;
