import { Box, Hide, Show } from "@chakra-ui/react"

import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"

const SideBar = () => (
  <>
    <Hide below='xl'>
      <Box w='full' maxW='280px'>
        <HeaderDesktop />
      </Box>
    </Hide>

    <Show below='xl'>
      <HeaderMobile />
    </Show>
  </>
)

export default SideBar
