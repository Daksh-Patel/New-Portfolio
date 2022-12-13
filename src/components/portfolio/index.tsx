import Title from "components/common/title"
import Layout from "components/layout"
import { ProjectsDetails } from "configs/project-details"

import ProjectList from "./project-list"

interface PortfolioProps {
  select: string
}

const Portfolio = (props: PortfolioProps) => {
  const { select } = props

  return (
    <Layout id='portfolio' background='#2e3135'>
      <Title
        title='My '
        subTitle='Portfolio'
        select={select}
        backTitle='Projects'
      />

      <ProjectList select={select} data={ProjectsDetails} />
    </Layout>
  )
}

export default Portfolio
