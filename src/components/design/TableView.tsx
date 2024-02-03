import { DistrictTable } from '@components/tables/DistrictTable';
import { SchoolsTable } from '@components/tables/SchoolsTable';
import { NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from '@utils/nces';
import React, { useState } from 'react';
import { RadioGroupStack } from './RadioGroupStack';

export interface TableViewProps {
  districtData : NCESDistrictFeatureAttributes[];
  schoolData : NCESSchoolFeatureAttributes[]
}

export const TableView: React.FC<TableViewProps> = ({ districtData, schoolData }) => {
  const [view, setSelectedView] = useState('View Districts');
  const viewOptions = ['View Districts', 'View Schools'];

  const handleViewSelection = (e: any) => {
    setSelectedView(e);
  };

  return (
    <>
      <RadioGroupStack
        options={viewOptions}
        handleSwitch={handleViewSelection}
        defaultValue="View Districts"
        name="view2"
      />
      {view=='View Districts' ? <DistrictTable data={districtData}/> : <SchoolsTable data={schoolData} />}
    </>
  );
};
