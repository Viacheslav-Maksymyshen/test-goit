import TweetCard from './TweetCard';
import { ChakraProvider } from '@chakra-ui/react';

import user from '../data/user.json';

export const App = () => {
  return (
    <ChakraProvider>
      <TweetCard />
    </ChakraProvider>
  );
};
