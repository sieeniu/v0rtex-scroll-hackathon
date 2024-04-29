import { type ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { CompanyList } from '@/modules/companies';

import { type NextPageWithLayout } from '../_app';

const Companies: NextPageWithLayout = () => {
  return (
    <>
      <Heading size="h1">Companies</Heading>
      <PageDescription>
        Search for the company you are interested in to learn more about its
        token.
      </PageDescription>
      <CompanyList />
    </>
  );
};

Companies.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Companies;
