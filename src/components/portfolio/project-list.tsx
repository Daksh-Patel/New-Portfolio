import { LinkIcon } from "@chakra-ui/icons"
import { Box, Icon, Image, Link, SimpleGrid } from "@chakra-ui/react"

import { ProjectListTypes } from "./types"

type ProjectListProps = {
  data: ProjectListTypes[]
  select: string
}

const ProjectList = (props: ProjectListProps) => {
  const { data, select } = props

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      mt={{ base: "35px", md: "50px" }}
      spacing={{ base: 18, md: 30 }}
      pt='10px'
    >
      {data.map((dat) => (
        <Box
          key={dat.id}
          position='relative'
          role='group'
          overflow='hidden'
          transition='0.5s linear'
          _after={{
            content: "''",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 0,
            background: "rgba(0,0,0,0.6)",
            transition: "0.5s linear",
          }}
          _hover={{
            _after: {
              height: "100%",
              transition: "0.5s linear",
            },
          }}
        >
          <Image src={dat.image} alt={dat.label} />
          <Link
            href={dat.href}
            rel='preview'
            target='_blank'
            w='50%'
            position='absolute'
            height='0'
            bottom='unset'
            aria-label={dat.label}
            left='50%'
            transform='translateX(-50%)'
            background='#26282b'
            textAlign='center'
            zIndex={9}
            transition='0.5s linear'
            borderTopRadius='lg'
            _groupHover={{
              bottom: "0",
              transition: "0.5s linear",
              height: "40px",
            }}
            _hover={{
              background: select,
            }}
          >
            <Icon as={LinkIcon} fontSize='20px' mt='9px' color='white' />
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  )
}
export default ProjectList
