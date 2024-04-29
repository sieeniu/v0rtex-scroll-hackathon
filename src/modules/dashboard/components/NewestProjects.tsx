import Link from 'next/link';
import { useMemo } from 'react';
import styled from 'styled-components';

import {
  Button,
  type ColumnData,
  CompanyIcon,
  Heading,
  MarketplaceIcon,
  Table,
} from '@/components';
import { CompanyName } from '@/modules/companies';
import { useGetCompanies } from '@/modules/companies/hooks';
import { routes } from '@/routes';

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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
        <Header>
          <Heading size="h2">Newest projects</Heading>
          <Link href={routes.companies}>
            <Button variant="primary" icon={<CompanyIcon />}>
              Go to companies
            </Button>
          </Link>
        </Header>
        <Table data={tableData} columns={columns} isLoading={isLoading} />
      </Section>
      <Section>
        <Header>
          <Heading size="h2">Newest Tokens</Heading>
          <Link href={routes.marketplace}>
            <Button variant="primary" icon={<MarketplaceIcon />}>
              Go to marketplace
            </Button>
          </Link>
        </Header>
        <Table data={tableData} columns={columns} isLoading={isLoading} />
      </Section>
    </Wrapper>
  );
};
