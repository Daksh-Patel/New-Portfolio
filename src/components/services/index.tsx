import Title from "components/common/title"
import Layout from "components/layout"
import { ServicesList } from "configs/services-list"

import ServiceTypes from "./services-types"

interface ServicesProps {
  select: string
}

const Services = (props: ServicesProps) => {
  const { select } = props

  return (
    <Layout id='services' background='#26282b'>
      <Title
        title='My '
        subTitle='Services'
        select={select}
        backTitle='Services'
      />

      <ServiceTypes select={select} data={ServicesList} />
    </Layout>
  )
}
export default Services
