import { Center, Link } from "@chakra-ui/react"

const Logo = () => (
  <Center mb={{ base: "60px", md: "70px", "2xl": "90px" }}>
    <Link
      href='/'
      rel='preload'
      fontSize={{ base: "32px", md: "38px" }}
      fontWeight='extrabold'
      aria-label='logo'
      letterSpacing={2}
      color='#FAFAFA'
      textTransform='uppercase'
      _hover={{
        textDecoration: "none",
      }}
    >
      Daksh
    </Link>
  </Center>
)

export default Logo
