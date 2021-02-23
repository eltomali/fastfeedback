import { useAuth } from '@/lib/auth';
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Link,
  Stack
} from '@chakra-ui/react';
import { FastFeedBackIcon } from 'public/icons';
import React from 'react';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="whiteAlpha.900"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack
          spacing={4}
          isInline
          justifyContent="flex-start"
          alignItems="center"
        >
          <FastFeedBackIcon color="black" size="24px" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex alignItems="center">
          <Link>Account</Link>
          <Avatar ml={5} size="sm" src={auth?.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        backgroundColor="blackAlpha.100"
        borderRadius="4px"
      >
        <Flex
          maxWidth="800px"
          w="100%"
          h="100vh"
          ml="auto"
          mr="auto"
          direction="column"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink colot="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color="black" mb={4}>
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
