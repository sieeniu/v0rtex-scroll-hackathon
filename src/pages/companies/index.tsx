import { type ReactElement } from 'react';

import { AppLayout } from '@/layouts/AppLayout';
import { CompanyList, CompanyListHeader } from '@/modules/companies';

import { type NextPageWithLayout } from '../_app';

const Companies: NextPageWithLayout = () => {
  return (
    <>
      <CompanyListHeader />
      <CompanyList />
    </>
  );
};

Companies.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Companies;
