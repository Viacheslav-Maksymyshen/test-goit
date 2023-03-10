import TweetCardList from '../../components/TweetCardList';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Tweet = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    toggleColorMode();
  };

  return (
    <Box p="32px">
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={handleToggleColorMode}
        size="md"
        position="fixed"
        top="32px"
        right="32px"
        zIndex="99"
      />
      <TweetCardList />
    </Box>
  );
};

export default Tweet;
