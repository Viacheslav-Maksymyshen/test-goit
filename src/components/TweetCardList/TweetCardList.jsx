import usersData from '../../data/users.json';
import { SimpleGrid } from '@chakra-ui/react';

import TweetCard from '../TweetCard';

const TweetCardList = () => {
  return (
    <>
      <SimpleGrid
        as="ul"
        mx={'auto'}
        maxWidth={{ base: '280px', md: '704px', xl: '1248px' }}
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr 1fr',
          xl: '1fr 1fr 1fr 1fr',
        }}
        gap={'32px'}
        width={'full'}
        listStyleType={'none'}
      >
        {usersData.map(user => (
          <TweetCard key={user.id} userId={user.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default TweetCardList;
