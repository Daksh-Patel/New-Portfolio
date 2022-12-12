import { HStack, Icon, Link, Tooltip } from "@chakra-ui/react"

import { MediaTypes } from "./types"

interface MediaProps {
  select: string
  media: MediaTypes[]
}

const Media = (props: MediaProps) => {
  const { select, media } = props

  return (
    <HStack
      alignItems='center'
      spacing={{ base: 2.5, md: 4 }}
      my={{ base: "12px", md: "15px" }}
      justifyContent={{ base: "center", lg: "flex-start" }}
    >
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
            fontSize={{ base: "22px", md: "25px" }}
            color='white'
            transition='all 0.5s ease'
            _hover={{ color: select }}
            target='_blank'
          >
            <Icon as={data.icon} />
          </Link>
        </Tooltip>
      ))}
    </HStack>
  )
}

export default Media
