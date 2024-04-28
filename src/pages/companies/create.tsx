import { ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { CreateCompany } from '@/modules/companies';

import { NextPageWithLayout } from '../_app';

const CreateCompanyPage: NextPageWithLayout = () => {
  return (
    <>
      <Heading size="h1">Create company</Heading>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
      <CreateCompany />
    </>
  );
};

CreateCompanyPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreateCompanyPage;
