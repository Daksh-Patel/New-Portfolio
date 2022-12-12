import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Circle,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react"

import HeaderDesktop from "./header-desktop"

const HeaderMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as='header'
      position='fixed'
      zIndex={9}
      top={{ base: "15px", md: "30px" }}
      left={{ base: "15px", md: "30px" }}
    >
      <Circle
        as='button'
        aria-label='menu-button'
        onClick={onOpen}
        size={{ base: "40px", md: "50px" }}
        // background={select}
        transition='0.5s ease'
        // _hover={{ background: hover }}
      >
        <Icon
          as={HamburgerIcon}
          color='#FAFAFA'
          fontSize={{ base: "20px", md: "24px" }}
        />
      </Circle>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent background='#2E3135' maxWidth='280px'>
          <DrawerCloseButton
            color='#FAFAFA'
            fontSize='18px'
            zIndex={9999}
            mt='15px'
            transition='0.3s ease'
            _hover={{
              transform: "rotate(90deg) scale(1.2)",
            }}
          />

          <HeaderDesktop />
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default HeaderMobile
