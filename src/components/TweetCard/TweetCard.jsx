import { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import usersData from '../../data/users.json';

const TweetCard = ({ userId = 1 }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [userData, setUserData] = useState(() => {
    const user = usersData.find(user => user.id === userId);
    return user || {};
  });
  const [followers, setFollowers] = useState(() => {
    const storedData = localStorage.getItem('usersData');
    const addStoredData = JSON.parse(storedData) || [];
    const user = addStoredData.find(user => user.id === userId);
    return user ? user.followers : userData.followers || 0;
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('usersData')) || [];
    const user = storedData.find(user => user.id === userId);
    if (user) {
      setFollowers(user.followers);
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(
      'usersData',
      JSON.stringify(
        usersData.map(user => {
          if (user.id === userId) {
            return { ...user, followers };
          }
          return user;
        })
      )
    );
  }, [followers, userId]);

  const handleFollowClick = () => {
    const newFollowers =
      followers === userData.followers ? followers + 1 : followers - 1;
    setFollowers(newFollowers);
  };

  const cardBgColor = useColorModeValue('#471CA9', 'gray.700');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      w="380px"
      h="435px"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={cardBorderColor}
      bg={cardBgColor}
      overflow="hidden"
    >
      <Box p="20px">
        <Box d="flex" alignItems="center">
          <Box mr="3">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://picsum.photos/200"
              alt="User Avatar"
            />
          </Box>
        </Box>

        <Box mt="2" color="#EBD8FF">
          <Text>{followers}</Text>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <IconButton
            variant="ghost"
            colorScheme="blue"
            aria-label="Like Tweet"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
          <Text fontSize="sm" color="gray.500" ml="2">
            {userData ? userData.tweets : '-'}
          </Text>
          <Button
            ml="auto"
            colorScheme="blue"
            onClick={handleFollowClick}
            variant="outline"
          >
            {followers === userData.followers ? 'Following' : 'Follow'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TweetCard;
