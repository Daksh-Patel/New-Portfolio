import { useState } from "react"

import { Box, Hide, Show } from "@chakra-ui/react"

import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"

interface SiderBarProps {
  select: string
  hover: string
}

const SideBar = (props: SiderBarProps) => {
  const { select, hover } = props

  const [activeItem, setActiveItem] = useState<string>("home")

  return (
    <>
      <Hide below='xl'>
        <Box w='full' maxW='280px'>
          <HeaderDesktop
            select={select}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Box>
      </Hide>

      <Show below='xl'>
        <HeaderMobile
          select={select}
          hover={hover}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </Show>
    </>
  )
}

export default SideBar
