'use client';

import dynamic from 'next/dynamic';

import { API_MOCKING } from '@/config/constants';
import { db } from '@/mocks/db';
import { handlers } from '@/mocks/handlers';

const MSWDevTools = dynamic(() =>
  import('msw-devtools').then(({ MSWDevTools }) => MSWDevTools),
);

type Props = {
  children: React.ReactNode;
};

if (API_MOCKING) {
  require('../mocks');
}

export const MSWWrapper = ({ children }: Props) => {
  return (
    <>
      {API_MOCKING && <MSWDevTools db={db} handlers={handlers} />}
      {children}
    </>
  );
};
