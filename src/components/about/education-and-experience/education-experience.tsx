import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

import { EducationType } from "./types"

interface ExperienceEducationProps {
  select: string
  title: string
  data: EducationType[]
}

const ExperienceEducation = (props: ExperienceEducationProps) => {
  const { select, title, data } = props

  return (
    <Box
      width={{ base: "full", lg: "50%" }}
      mb={{ base: "30px", md: "60px", lg: "0" }}
    >
      <Heading
        as='h4'
        fontSize={{ base: "18px", sm: "20px", md: "24px" }}
        textTransform='uppercase'
        fontWeight='semibold'
        letterSpacing={2}
        color='#FAFAFA'
        textAlign='center'
        mb={{ base: "15px", md: "25px" }}
      >
        {title}
      </Heading>

      <VStack
        w='full'
        alignItems='flex-start'
        paddingLeft={{ base: "18px", md: "25px" }}
        borderLeft='2px solid #424242'
        spacing={{ base: 6, md: 10 }}
      >
        {data.map((dat) => (
          <Box
            key={dat.id}
            py={{ base: "12px", md: "15px" }}
            px={{ base: "12px", md: "25px" }}
            boxShadow='2px 0px 0px 1px #424242'
            borderRadius='4px'
            borderLeft='3px solid'
            borderColor={select}
            width='full'
            minHeight='141px'
            height='auto'
            transition='0.5s ease'
            position='relative'
            _after={{
              content: "''",
              position: "absolute",
              top: "17px",
              left: { base: "-28.5px", md: "-37px" },
              width: { base: "13px", md: "17px" },
              height: { base: "13px", md: "17px" },
              borderRadius: "50%",
              border: "2px solid",
              borderColor: select,
              background: "#2e3135",
              transition: "0.5s ease",
            }}
            _before={{
              content: "''",
              position: "absolute",
              top: { base: "23px", md: "25px" },
              left: { base: "-27px", md: "-34px" },
              width: { base: "25px", md: "33px" },
              height: "2px",
              background: select,
              transition: "0.5s ease",
            }}
            _hover={{
              boxShadow: "0 0 10px rgb(255 255 255 / 20%)",
              _after: {
                background: select,
              },
            }}
          >
            <Heading
              as='h5'
              textTransform='uppercase'
              fontSize={{ base: "14px", sm: "17px", md: "20px" }}
              fontWeight='medium'
              letterSpacing={1}
              mb={{ base: "6px", md: "12px" }}
              color='#FAFAFA'
            >
              {dat.degree}
            </Heading>

            <HStack
              align='center'
              flexDirection={{ base: "column", md: "row" }}
              spacing={{ base: 0, md: 5 }}
              mb='8px'
            >
              <Text
                as='span'
                fontSize='13px'
                color='#B6B6B6'
                w={{ base: "100%", md: "unset" }}
                mb={{ base: 1, sm: 2, md: 0 }}
              >
                <Icon
                  as={FaMapMarkerAlt}
                  mr='6px'
                  position='relative'
                  top='2px'
                />
                {dat.schoolCollegeName}
              </Text>

              <Text
                as='span'
                fontSize='13px'
                color='#B6B6B6'
                w={{ base: "100%", md: "unset" }}
              >
                <Icon as={FaCalendarAlt} mr='6px' position='relative' />
                {dat.year}

                <Badge
                  variant='solid'
                  background='#28A745'
                  borderRadius={4}
                  letterSpacing={1}
                  ml='12px'
                >
                  {dat.badge}
                </Badge>
              </Text>
            </HStack>

            <Text
              fontSize={{ base: "13px", md: "15px" }}
              color='#B6B6B6'
              letterSpacing={1}
            >
              {dat.text}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default ExperienceEducation
