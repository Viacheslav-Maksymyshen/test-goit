import TweetCard from './TweetCard';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      <TweetCard />
    </ChakraProvider>
  );
};
