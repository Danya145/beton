import { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  return <>{children}</>;
};
