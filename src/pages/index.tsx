import { ColorModeButton } from "@/components/ui/color-mode"
import { Box, Button, Center, Flex } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Center height='100vh' flexDirection='column' gap='4'>
        <Flex flexDir={"row-reverse"}>
          <Box layerStyle='card-elevated'>FLEX 1</Box>
          <Box layerStyle='card-elevated'>FLEX 2</Box>
          <Box layerStyle='card-elevated'>FLEX 3</Box>
        </Flex>
      </Center>
    </>
  )
}
