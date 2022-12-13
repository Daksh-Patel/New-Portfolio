import {
  Box,
  Circle,
  Heading,
  HStack,
  Icon,
  Link,
  Tooltip,
} from "@chakra-ui/react"
import { FaShareAlt } from "react-icons/fa"

import { MediaTypes } from "components/banner/types"

interface MediaProps {
  select: string
  media: MediaTypes[]
}

const SocialMedia = (props: MediaProps) => {
  const { select, media } = props

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
            as={FaShareAlt}
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
            Social Profiles
          </Heading>

          <HStack alignItems='center' spacing={{ base: 2, md: 3 }}>
            {media.map((data) => (
              <Tooltip
                key={data.id}
                label={data.label}
                hasArrow
                background='rgb(0 0 0 /0.9)'
                color='white'
                placement='top'
              >
                <Link
                  href={data.href}
                  aria-label={data.label}
                  fontSize={{ base: "15px", md: "18px" }}
                  color='#B6B6B6'
                  transition='all 0.5s ease'
                  _hover={{ color: select }}
                  target='_blank'
                >
                  <Icon as={data.icon} />
                </Link>
              </Tooltip>
            ))}
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default SocialMedia
