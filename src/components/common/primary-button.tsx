import { BoxProps, HStack, Icon, Link, Text } from "@chakra-ui/react"
import { IconType } from "react-icons/lib"

type ButtonProps = {
  href: string
  text: string
  icon?: IconType
  label: string
}

const PrimaryButton = (props: ButtonProps & BoxProps) => {
  const { href, text, icon, label, background, bgColor } = props

  return (
    <Link
      href={href}
      aria-label={label}
      px={{ base: "25px", md: "34px" }}
      py='12px'
      color='#FFFFFF'
      display='inline-block'
      fontSize={{ base: "13px", md: "15px" }}
      textTransform='uppercase'
      letterSpacing={2}
      fontWeight='semibold'
      borderRadius='26px'
      background={background}
      position='relative'
      overflow='hidden'
      _after={{
        content: "''",
        position: "absolute",
        top: 0,
        left: "-25%",
        width: "0%",
        height: "100%",
        bgColor,
        transform: "skew(-22deg)",
        transition: "all 0.5s linear",
        zIndex: 1,
      }}
      _hover={{
        textDecoration: "none",
        _after: {
          width: "128%",
        },
      }}
    >
      <HStack
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex={9}
        spacing={2}
      >
        <Icon as={icon} />
        <Text as='span'>{text}</Text>
      </HStack>
    </Link>
  )
}
export default PrimaryButton
