import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box
      width="100%"
      backgroundColor="whiteAlpha.900"
      p={8}
      height="100%"
      borderRadius="8px"
    >
      <Heading size="md">Get feedback on your site instantly.</Heading>
      <Text>Start today, then grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
