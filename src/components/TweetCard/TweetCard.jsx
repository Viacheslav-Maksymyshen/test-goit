import { useState, useEffect } from 'react';
import logo from '../../media/Logo.svg';
import bg from '../../media/Bg.svg';
import {
  Box,
  Text,
  Image,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Card,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import usersData from '../../data/users.json';

const TweetCard = ({ userId }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [userData] = useState(() => {
    const user = usersData.find(user => user.id === userId);
    return user || {};
  });
  const [followers, setFollowers] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('usersData')) || {};
    return storedData[userId]?.followers ?? userData.followers ?? 0;
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('usersData')) || {};
    const storedFollowers = storedData[userId]?.followers;
    if (storedFollowers !== undefined) {
      setFollowers(storedFollowers);
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(
      'usersData',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('usersData') || '{}'),
        [userId]: { followers },
      })
    );
  }, [followers, userId]);

  const handleFollowClick = () => {
    const newFollowers =
      followers === userData.followers ? followers + 1 : followers - 1;
    setFollowers(newFollowers);
  };
  const cardBgColor = useColorModeValue('#471CA9', 'gray.700');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.600');

  const basicTweetCardStyles = {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '1.2',
    textTransform: 'uppercase',
  };

  const stripe = {
    pos: 'absolute',
    w: '379px',
    h: '8px',
    top: '214px',
    left: '50%',
    transform: 'translate(-50%)',
    bg: '#EBD8FF',
    boxShadow:
      '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
  };

  const avatarStyles = {
    pos: 'absolute',
    w: '80px',
    h: '80px',
    top: '178px',
    left: '50%',
    transform: 'translate(-50%)',
    bg: '#FBF8FF',

    padding: '8px',
    border: 'none',
    boxShadow:
      '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;',

    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > img': {
      borderRadius: 'inherit',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <Card
      as={'li'}
      w="380px"
      h="460px"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={cardBorderColor}
      bg={cardBgColor}
      overflow="hidden"
      pos="relative"
    >
      <CardBody>
        <Box pos="absolute" w="76px" h="22px" top="20px" left="20px">
          <Image borderRadius="full" src={logo} alt="logo" />
        </Box>
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          top="28px"
          w="308px"
          h="168px"
        >
          <Image borderRadius="full" src={bg} alt="bg" />
        </Box>

        <Box sx={stripe}></Box>
        <Box sx={avatarStyles}>
          <Box bg="#471CA9" overflow="hidden" borderRadius="50%">
            <Image
              maxW="100%"
              maxH="100%"
              src={userData.avatar}
              alt="User Avatar"
            />
          </Box>
        </Box>
      </CardBody>

      <CardFooter
        textAlign="center"
        pos="absolute"
        bottom="36px"
        left="50%"
        transform="translateX(-50%)"
      >
        {/* <IconButton
            variant="ghost"
            colorScheme="blue"
            aria-label="Like Tweet"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          /> */}
        <Box sx={basicTweetCardStyles}>
          <Text paddingBottom="16px" color="#EBD8FF">
            {userData ? followers : '-'}
          </Text>
          <Text paddingBottom="26px" color="#EBD8FF">
            {userData ? userData.tweets : '-'}
          </Text>
          <Button
            sx={basicTweetCardStyles}
            w="196px"
            h="50px"
            ml="auto"
            onClick={handleFollowClick}
            variant="solid"
            backgroundColor={
              followers === userData.followers
                ? 'cardButton.follow'
                : 'cardButton.following'
            }
            boxShadow="0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)"
            _hover={{ opacity: 0.8 }}
            _focus={{ boxShadow: 'outline' }}
          >
            {followers === userData.followers ? 'Follow ' : 'Following'}
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default TweetCard;
