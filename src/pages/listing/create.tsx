import { ReactElement, useEffect, useState } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { ListToken } from '@/modules/token/components/ListToken';

import { NextPageWithLayout } from '../_app';

const CreateListingPage: NextPageWithLayout = () => {
  const [ready, setReady] = useState<boolean>();

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <Heading size="h1">List Your Token</Heading>
      <PageDescription>
        List your token on our marketplace! Set its price and let is get
        started!
      </PageDescription>
      <ListToken />
    </>
  );
};

CreateListingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreateListingPage;
