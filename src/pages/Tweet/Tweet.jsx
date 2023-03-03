import TweetCardList from '../../components/TweetCardList';

import { Box, Container } from '@chakra-ui/react';

const Tweet = () => {
  return (
    <Box
      h={{
        base: 'calc(100vh - 74px)',
        md: 'calc(100vh - 96px)',
        xl: 'calc(100vh - 88px)',
      }}
      display="flex"
    >
      <TweetCardList />
    </Box>
  );
};

export default Tweet;
