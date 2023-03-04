import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Spinner } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <Spinner
            size="xl"
            thickness="4px"
            color="purple.500"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
