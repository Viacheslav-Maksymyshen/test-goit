import { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const TweetCard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLiked, setIsLiked] = useState(false);
  const likeText = isLiked ? 'Liked' : 'Like';
  const toggleLike = () => {
    setIsLiked(prevState => !prevState);
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
          <Box>
            <Text fontWeight="bold">John Doe</Text>
            <Text fontSize="sm" color="gray.500">
              @johndoe · 1h
            </Text>
          </Box>
        </Box>

        <Box mt="2" color="#EBD8FF">
          <Text>777 tweets</Text>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <IconButton
            variant="ghost"
            colorScheme="blue"
            aria-label="Like Tweet"
            icon={isLiked ? <FaHeart /> : <FaRegHeart />}
            onClick={toggleLike}
          />
          <Text fontSize="sm" color="gray.500" ml="2">
            {likeText}
          </Text>
          <Button
            ml="auto"
            colorScheme="blue"
            onClick={toggleColorMode}
            variant="outline"
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TweetCard;
