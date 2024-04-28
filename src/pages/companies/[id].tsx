import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { AppLayout } from '@/layouts/AppLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CompanyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  console.log(router);
  return <h1>CompanyId: {id}</h1>;
};

CompanyPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CompanyPage;
