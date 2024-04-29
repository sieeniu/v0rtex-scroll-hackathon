import { type ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { MarketplaceList } from '@/modules/marketplace/components/MarketplaceList';

import { type NextPageWithLayout } from '../_app';

const Marketplace: NextPageWithLayout = () => {
  return (
    <>
      <Heading size="h1">Marketplace</Heading>
      <PageDescription>
        Here you can buy and sell tokens of individual companies.
      </PageDescription>
      <MarketplaceList />
    </>
  );
};

Marketplace.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Marketplace;
