import { ReactElement, useEffect, useState } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { MintToken } from '@/modules/companies';

import { NextPageWithLayout } from '../_app';

const CreateTokenPage: NextPageWithLayout = () => {
  const [ready, setReady] = useState<boolean>();

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <Heading size="h1">Mint Token</Heading>
      <PageDescription>
        Here you can mint your own token, which will allow other users to invest
        in your company!
      </PageDescription>
      <MintToken />
    </>
  );
};

CreateTokenPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreateTokenPage;
