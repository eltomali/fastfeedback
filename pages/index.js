import { useAuth } from '@/lib/auth';
import { Button, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { FastFeedBackIcon } from 'public/icons';

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Heading>Fast Feedback</Heading>
      <FastFeedBackIcon color="black.500" boxSize="64px" />
      {/* <Text>
          Current user: <Code>{auth.user ? auth.user.name : 'None'}</Code>
        </Text> */}

      {auth.user ? (
        <Button as="a" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
