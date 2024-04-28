import { type ReactElement } from 'react';

import { AppLayout } from '@/layouts/AppLayout';

import { type NextPageWithLayout } from './_app';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Index;
