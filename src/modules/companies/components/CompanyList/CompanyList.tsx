import { ChangeEvent, useMemo, useState } from 'react';

import { type ColumnData, CompanyIcon, Search, Table } from '@/components';

import { useGetCompanies } from '../../hooks';
import { ButtonContainer, CompanyName, Wrapper } from './CompanyList.styles';

export const CompanyList = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading } = useGetCompanies({
    first: 10,
    search: searchValue,
  });
  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
  };

  const columns: Record<string, ColumnData> = useMemo(
    () => ({
      registrationDocuments: {
        label: 'Company',
      },
      proofOfAddress: {
        label: 'Address',
      },
      taxIDNumber: {
        label: 'Tax ID',
      },
    }),
    [],
  );

  const tableData = useMemo(() => {
    if (!data) return [];

    return data.businessCreateds.map(company => ({
      registrationDocuments: (
        <CompanyName>
          <CompanyIcon />
          {company.registrationDocuments}
        </CompanyName>
      ),
      proofOfAddress: <span>{company.proofOfAddress}</span>,
      taxIDNumber: <span>{company.taxIDNumber}</span>,
    }));
  }, [data]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Search placeholder="Search by company name" onSearch={handleSearch} />
      </ButtonContainer>
      <Table data={tableData} columns={columns} isLoading={isLoading} />
    </Wrapper>
  );
};
