import { Box } from "@chakra-ui/react"

import SubTitle from "components/common/sub-title"
import { SkillsTypeList } from "configs/skills-types-list"

import SkillsType from "./skills-types"

interface SkillsProps {
  select: string
}

const Skills = (props: SkillsProps) => {
  const { select } = props

  return (
    <Box as='section' id='skills'>
      <SubTitle subTitle='Skills' />

      <SkillsType select={select} type={SkillsTypeList} />
    </Box>
  )
}

export default Skills
