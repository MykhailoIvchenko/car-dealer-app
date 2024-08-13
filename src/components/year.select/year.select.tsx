import { helperService } from '@/services/helper.service';
import Dropdown from '../dropdown/dropdown';
import { DropdownValueType } from '@/utils/common.types';

type YearSelectType = {
  selectedYear: string | null;
  selectYear: React.Dispatch<React.SetStateAction<string | null>>;
};

const YearSelect: React.FC<YearSelectType> = ({ selectedYear, selectYear }) => {
  const handleYearSelect = (year: DropdownValueType) => {
    selectYear(year);
  };

  const yearsList = helperService.getYearsListAsDropdownOptions();

  return (
    <Dropdown
      title="Select year"
      selectedItem={selectedYear}
      items={yearsList}
      handleOptionClick={handleYearSelect}
    />
  );
};

export default YearSelect;
