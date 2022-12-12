import Title from "components/common/title"
import Layout from "components/layout"

import EducationAndExperience from "./education-and-experience"
import PersonalDetails from "./personal-details"
import Skills from "./skills"

interface AboutProps {
  select: string
  hover: string
}

const About = (props: AboutProps) => {
  const { select, hover } = props

  return (
    <Layout background='#2e3135' id='about'>
      <Title select={select} title='About ' subTitle='Me' backTitle='Resume' />

      <PersonalDetails select={select} hover={hover} />

      <EducationAndExperience select={select} />

      <Skills select={select} />
    </Layout>
  )
}

export default About
