import { Link } from 'react-router-dom';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import ErrorImage from '../../media/404.svg';

const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      padding="2rem"
      bg="gray.50"
      height="100vh"
    >
      <img
        src={ErrorImage}
        alt="404"
        style={{ maxWidth: '30%', height: 'auto' }}
      />
      <Heading mt="8" fontSize="3xl" fontWeight="bold" color="purple.600">
        Oops! Page not found.
      </Heading>
      <Text mt="4" fontSize="xl" textAlign="center">
        The page you're looking for does not exist. <br />
        Please check the URL and try again.
      </Text>
      <Link to="/">
        <Button colorScheme="purple" variant="outline" size="lg" mt="8">
          Take me home
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFound;
