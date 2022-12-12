import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

import { SkillsTypes } from "./types"

type SkillsTypeProps = {
  type: SkillsTypes[]
  select: string
}

const SkillsType = (props: SkillsTypeProps) => {
  const { type, select } = props

  return (
    <SimpleGrid
      spacing={{ base: 5, sm: 6, md: 10 }}
      columns={{ base: 1, md: 2 }}
    >
      {type.map((data) => (
        <VStack alignItems='flex-start' key={data.id}>
          <HStack w='full' justifyContent='space-between' alignItems='center'>
            <Heading
              as='h3'
              fontSize={{ base: "12px", sm: "14px" }}
              fontWeight='bold'
              color='#B6B6B6'
              letterSpacing={1}
            >
              {data.title}
            </Heading>
            <Text
              fontSize={{ base: "12px", sm: "14px" }}
              fontWeight='bold'
              color='#B6B6B6'
              letterSpacing={1}
            >
              {data.percentage}%
            </Text>
          </HStack>

          <Box
            w='full'
            height='10px'
            background='#26282b'
            borderRadius='3px'
            boxShadow='inset 0 1px 1px rgb(0 0 0 / 10%)'
            position='relative'
            _after={{
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              borderRadius: "3px",
              width: `${data.percentage}%`,
              background: select,
            }}
          />
        </VStack>
      ))}
    </SimpleGrid>
  )
}

export default SkillsType
