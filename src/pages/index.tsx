import { ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { Dashboard } from '@/modules/dashboard';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Heading>Featured projects</Heading>
      <PageDescription>
        Projects that are of the greatest interest in our community. Find
        something for yourself and invest today!
      </PageDescription>
      <Dashboard />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
