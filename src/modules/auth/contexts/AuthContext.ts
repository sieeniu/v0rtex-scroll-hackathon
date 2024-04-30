import { createContext } from 'react';

export type AuthContextProps = {
  isAuthenticated: boolean | undefined;
  userId: string | undefined;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: undefined,
  userId: undefined,
});
