import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { Box, Button, ClientOnly } from "@chakra-ui/react"
import About from "./about"

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue("white", "gray.800")
  const color = useColorModeValue("black", "white")

  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      <Box bg={bg} color={color}>
        <Button onClick={toggleColorMode}>
          切換至 {colorMode === "light" ? "深色" : "淺色"} 模式
        </Button>
      </Box>
      <About></About>
    </ClientOnly>
  )
}
