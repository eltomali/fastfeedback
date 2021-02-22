import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.name : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
