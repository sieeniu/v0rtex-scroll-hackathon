import { ReactElement } from 'react';

import { Heading } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return <Heading>Home</Heading>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
