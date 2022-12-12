import { Box, HStack } from "@chakra-ui/react"

import SubTitle from "components/common/sub-title"
import { Education, Experience } from "configs/education-experience-list"

import ExperienceEducation from "./education-experience"

interface EducationAndExperienceProps {
  select: string
}

const EducationAndExperience = (props: EducationAndExperienceProps) => {
  const { select } = props

  return (
    <Box mb={{ base: "30px", md: "50px" }}>
      <SubTitle subTitle='Education & Experience' />

      <HStack
        alignItems='flex-start'
        flexDirection={{ base: "column", lg: "row" }}
        spacing={{ base: 0, lg: 10 }}
      >
        <ExperienceEducation
          select={select}
          title='Education'
          data={Education}
        />

        <ExperienceEducation
          select={select}
          title='Experience'
          data={Experience}
        />
      </HStack>
    </Box>
  )
}

export default EducationAndExperience
