import { useConnectModal } from '@particle-network/connect-react-ui';
import { ReactElement } from 'react';

import { Button, Heading, PageDescription, WalletIcon } from '@/components';
import { LoginLayout } from '@/layouts/LoginLayout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  const { openConnectModal } = useConnectModal();
  return (
    <>
      <Heading>Login</Heading>
      <PageDescription>
        Projects that are of the greatest interest in our community. Find
        something for yourself and invest today!
      </PageDescription>
      <Button
        onClick={openConnectModal}
        variant="primary"
        icon={<WalletIcon />}
      >
        Login
      </Button>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default HomePage;
