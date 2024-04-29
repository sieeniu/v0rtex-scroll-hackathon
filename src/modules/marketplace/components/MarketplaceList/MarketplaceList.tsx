import Link from 'next/link';
import { ChangeEvent, useMemo, useState } from 'react';

import {
  Button,
  type ColumnData,
  CompanyIcon,
  Search,
  Table,
} from '@/components';
import { routes } from '@/routes';

import { useGetCompanies } from '../../../companies/hooks';
import {
  ButtonContainer,
  CompanyName,
  Wrapper,
} from './MarketplaceList.styles';

export const MarketplaceList = () => {
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
        label: 'Tokens',
      },
      proofOfAddress: {
        label: 'Amount',
      },
      taxIDNumber: {
        label: 'Price',
      },
    }),
    [],
  );

  const tableData = useMemo(() => {
    if (!data) return [];

    return data.businessCreateds.map(company => ({
      registrationDocuments: (
        <Link href={routes.company(company.id)}>
          <CompanyName>
            <CompanyIcon />
            {company.registrationDocuments}
          </CompanyName>
        </Link>
      ),
      proofOfAddress: <span>{company.proofOfAddress}</span>,
      taxIDNumber: <span>{company.taxIDNumber}</span>,
    }));
  }, [data]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Search placeholder="Search by token name" onSearch={handleSearch} />
        <Link href={routes.createCompany}></Link>
      </ButtonContainer>
      <Table data={tableData} columns={columns} isLoading={isLoading} />
    </Wrapper>
  );
};
