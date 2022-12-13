import { Box, Circle, Heading, HStack, Icon, Link } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface EmailPhoneProps {
  select: string
  title: string
  href: string
  text: string
  icon: IconType
}

const EmailPhone = (props: EmailPhoneProps) => {
  const { select, title, href, text, icon } = props

  return (
    <Box
      role='group'
      border='1px solid #424242'
      borderRadius={5}
      transition='ease-in-out .5s'
      p={{ base: "12px", md: "20px" }}
      _hover={{
        boxShadow: "0 0 10px 0 rgb(255 255 255 / 40%)",
      }}
    >
      <HStack alignItems='flex-start' spacing={{ base: 3, md: 5 }}>
        <Circle
          size={{ base: "35px", md: "40px" }}
          background='#2e3135'
          transition='0.5s ease'
          _groupHover={{ background: select }}
        >
          <Icon
            as={icon}
            fontSize={{ base: "15px", md: "18px" }}
            color={select}
            transition='0.5s ease'
            _groupHover={{ color: "white" }}
          />
        </Circle>

        <Box>
          <Heading
            as='h3'
            fontSize={{ base: "15px", md: "18px" }}
            fontWeight='bold'
            color='#FAFAFA'
            letterSpacing={1}
            textTransform='uppercase'
            mb={{ base: "5px", md: "10px" }}
          >
            {title}
          </Heading>

          <Link
            href={`${href}:${text}`}
            fontSize={{ base: "13px", md: "15px" }}
            color='#B6B6B6'
            _hover={{
              textDecoration: "none",
              color: select,
            }}
          >
            {text}
          </Link>
        </Box>
      </HStack>
    </Box>
  )
}

export default EmailPhone
