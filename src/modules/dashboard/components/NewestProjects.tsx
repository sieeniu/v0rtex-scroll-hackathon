import { type ColumnData, CompanyIcon, Table, Heading } from '@/components';
import { useGetCompanies } from '@/modules/companies/hooks';
import { useMemo } from 'react';
import Link from 'next/link';
import { routes } from '@/routes';
import { CompanyName } from '@/modules/companies';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
`;

export const NewestProjects = () => {
  const { data, isLoading } = useGetCompanies({
    first: 5,
    search: '',
  });

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
      <Section>
        <Heading size="h2">Newest projects</Heading>
        <Table data={tableData} columns={columns} isLoading={isLoading} />
      </Section>
      <Section>
        <Heading size="h2">Newest Tokens</Heading>
        <Table data={tableData} columns={columns} isLoading={isLoading} />
      </Section>
    </Wrapper>
  );
};
