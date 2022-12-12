import { Box, Container, BoxProps } from "@chakra-ui/react"

import { LayoutProps } from "./type"

const Layout = (props: LayoutProps & BoxProps) => {
  const { children, background, id } = props
  return (
    <Box
      id={id}
      as='section'
      py={{ base: "40px", md: "60px" }}
      background={background}
    >
      <Container
        maxWidth='1140px'
        px={{ base: "15px", md: "30px", lg: "15px" }}
        mx='auto'
      >
        {children}
      </Container>
    </Box>
  )
}
export default Layout
