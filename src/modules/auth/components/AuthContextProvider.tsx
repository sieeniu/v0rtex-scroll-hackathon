import '@particle-network/connect-react-ui/dist/index.css';

import { useAccount } from '@particle-network/connect-react-ui';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { routes } from '@/routes';

import { AuthContext } from '../contexts/AuthContext';
import { SplashScreen } from './SplashScreen';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);
  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAuthenticated = useMemo(
    () => isMounted && !!account,
    [account, isMounted],
  );

  useEffect(() => {
    if (!account) {
      void router.push(routes.login);
    } else {
      void router.push(routes.home);
    }
  }, [account]);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      userId: account,
    }),
    [account, isAuthenticated],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {isMounted ? children : <SplashScreen />}
    </AuthContext.Provider>
  );
};
