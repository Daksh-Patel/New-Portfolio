import { Box, Flex, VStack } from "@chakra-ui/react"

import Footer from "components/footer"
import Logo from "components/logo"
import { HeaderMenuItem } from "configs/header-menu"

import HeaderMenu from "./header-menu"

interface HeaderDesktopProps {
  select: string
  activeItem: string
  setActiveItem: (activeItem: string) => void
}

const HeaderDesktop = (props: HeaderDesktopProps) => {
  const { select, activeItem, setActiveItem } = props

  return (
    <Box
      as='header'
      py='15px'
      background='#2e3135'
      boxShadow='0 0 2px 0 rgb(0 0 0 / 40%)'
      position='fixed'
      maxW='280px'
      minW='280px'
      height='100vh'
      top='0'
      zIndex='9'
      transition='all linear 0.3s'
    >
      <VStack
        w='full'
        alignItems='flex-start'
        p={{ base: "20px", md: "30px", lg: "40px" }}
      >
        <Logo />

        <Flex alignItems='center'>
          <HeaderMenu
            dataList={HeaderMenuItem}
            select={select}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Flex>

        <Footer />
      </VStack>
    </Box>
  )
}

export default HeaderDesktop
