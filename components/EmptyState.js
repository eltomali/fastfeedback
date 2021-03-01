import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="whiteAlpha.900"
    p={16}
    mb={6}
    borderRadius="8px"
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      You haven't added any sites!
    </Heading>
    <Text mb={4}>Welcome, Let's get started</Text>
    <AddSiteModal> Add your first site </AddSiteModal>
  </Flex>
);

export default EmptyState;
