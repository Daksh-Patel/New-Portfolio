import { Box, Hide, Show } from "@chakra-ui/react"

import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"

interface SiderBarProps {
  select: string
  hover: string
}

const SideBar = (props: SiderBarProps) => {
  const { select, hover } = props

  return (
    <>
      <Hide below='xl'>
        <Box w='full' maxW='280px'>
          <HeaderDesktop select={select} />
        </Box>
      </Hide>

      <Show below='xl'>
        <HeaderMobile select={select} hover={hover} />
      </Show>
    </>
  )
}

export default SideBar
