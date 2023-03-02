import TweetCard from './TweetCard';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
  },
  colors: {
    cardButton: {
      follow: '#EBD8FF',
      following: '#5CD3A8',
    },
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <TweetCard />
    </ChakraProvider>
  );
};
