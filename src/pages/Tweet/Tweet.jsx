import TweetCardList from '../../components/TweetCardList';

import { Box, Container } from '@chakra-ui/react';

const Tweet = () => {
  try {
    return (
      <Box
        bgColor={'#FDF7F2'}
        h={{
          base: 'calc(100vh - 74px)',
          md: 'calc(100vh - 96px)',
          xl: 'calc(100vh - 88px)',
        }}
      >
        <Container>
          <TweetCardList />
        </Container>
      </Box>
    );
  } catch (error) {
    console.error(error);
    return <Box>Something went wrong</Box>;
  }
};

export default Tweet;
