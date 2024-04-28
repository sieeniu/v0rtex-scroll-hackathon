import { ReactElement } from 'react';

import { AppLayout } from '@/layouts/AppLayout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return <h1>Home</h1>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
