import { Box, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react"

import { ServicesListTypes } from "./types"

interface ServiceTypesProps {
  select: string
  data: ServicesListTypes[]
}

const ServiceTypes = (props: ServiceTypesProps) => {
  const { select, data } = props

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 18, md: 30 }}
      pt={{ base: "25px", md: "10px" }}
    >
      {data.map((service) => (
        <Box
          key={service.id}
          p={{ base: "12px", md: "25px" }}
          textAlign='center'
          border='1px solid #424242'
          borderRadius={5}
          transition='ease 0.5s'
          position='relative'
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            borderRadius: 5,
            borderLeft: `1px solid ${select}`,
            borderRight: `1px solid ${select}`,
            transform: "scaleY(0)",
            transformOrigin: "100% 0",
            transition: "ease 0.5s",
          }}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            borderRadius: 5,
            borderTop: `1px solid ${select}`,
            borderBottom: `1px solid ${select}`,
            transform: "scaleX(0)",
            transformOrigin: "0 100%",
            transition: "ease 0.5s",
          }}
          _hover={{
            background: "#2e3135",
            boxShadow: "0 0 10px rgb(33 33 33 / 20%)",
            transform: "translateY(-8px)",
            _after: {
              transform: "scaleY(1)",
            },
            _before: {
              transform: "scaleX(1)",
            },
          }}
        >
          <Box mb='10px'>
            <Icon
              as={service.icon}
              color={select}
              fontSize={{ base: "48px", md: "55px" }}
            />
          </Box>

          <Heading
            as='h3'
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            fontWeight='bold'
            textTransform='uppercase'
            letterSpacing={2}
            color='#FAFAFA'
            mb={{ base: "8px", md: "10px" }}
          >
            {service.title}
          </Heading>

          <Text
            fontSize={{ base: "13px", md: "15px" }}
            color='#B6B6B6'
            letterSpacing={1}
          >
            {service.text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default ServiceTypes
