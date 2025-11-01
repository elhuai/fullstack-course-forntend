import { ColorModeButton } from '@/components/ui/color-mode';
import { Box, Button, Center, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
    <Center height='100vh' flexDirection='column' gap='4'>
      <Flex flexDir={'row-reverse'}>
          <Box position='absolute' top='4' right='4'></Box>
          <Box position='absolute' top='4' right='4'></Box>
          <Box position='absolute' top='4' right='4'></Box>
      </Flex>
      
    </Center>
    </>
  );
}
