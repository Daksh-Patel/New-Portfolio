import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { FaDownload } from "react-icons/fa"

import ParagraphText from "components/common/paragraph-text"
import PrimaryButton from "components/common/primary-button"
import { PersonalDetailsList } from "configs/personal-details-list"

import DetailsList from "./detail-list"

interface PersonalDetailsProps {
  select: string
  hover: string
}

const PersonalDetails = (props: PersonalDetailsProps) => {
  const { select, hover } = props

  return (
    <HStack
      w='full'
      flexDirection={{ base: "column", lg: "row" }}
      alignItems='flex-start'
      spacing={{ base: 0, lg: 10 }}
      pt={{ base: "20px", sm: "30px" }}
      mb={{ base: "20px", sm: "30px", md: "50px" }}
    >
      <Box w={{ base: "full", lg: "50%" }} mb={{ base: 5, md: 8, lg: 0 }}>
        <Heading
          as='h3'
          color='white'
          fontSize='24px'
          textTransform='uppercase'
          fontWeight='normal'
          letterSpacing={1}
          mb='10px'
        >
          Hello! I&apos;m&nbsp;
          <Text as='span' color={select}>
            Daksh
          </Text>
        </Heading>

        <ParagraphText text='I have 10+ months of experience as Web Developer. I am looking to work with freelancing where I can use my technical as well as personal skills to complete a task taken. I can provide an extraordinary approach to every project.' />

        <ParagraphText text="I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I always keep searching for new platforms through which I can learn new things. I don't restrict myself to a single platform." />

        <PrimaryButton
          href='images/daksh_resume_latest.pdf'
          icon={FaDownload}
          text='Download my cv'
          label='Resume'
          background={select}
          bgColor={hover}
        />
      </Box>

      <Box w={{ base: "full", lg: "50%" }}>
        <DetailsList data={PersonalDetailsList} select={select} />
      </Box>
    </HStack>
  )
}

export default PersonalDetails
