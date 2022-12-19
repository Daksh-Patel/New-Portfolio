import { SimpleGrid } from "@chakra-ui/react"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

import Title from "components/common/title"
import Layout from "components/layout"
import { MediaList } from "configs/media-list"

import Address from "./address"
import ContactForm from "./contact-form"
import EmailPhone from "./email-phone"
import Map from "./map"
import SocialMedia from "./social-media"

interface ContactProps {
  select: string
  hover: string
}

const Contact = (props: ContactProps) => {
  const { select, hover } = props

  return (
    <Layout id='contact' background='#26282b'>
      <Title
        title='Contact '
        subTitle='Me'
        select={select}
        backTitle='Get In Touch'
      />

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 18, md: 30 }}
        mb={{ base: "30px", md: "50px" }}
        pt={{ base: "25px", md: 0 }}
      >
        <Address select={select} />

        <SocialMedia select={select} media={MediaList} />

        <EmailPhone
          select={select}
          title='Email Me'
          href='mailto'
          text='pateldaksh1520@gmail.com'
          icon={FaEnvelope}
        />

        <EmailPhone
          select={select}
          title='Call Me'
          href='tel'
          text='+91 9173186323'
          icon={FaPhoneAlt}
        />
      </SimpleGrid>

      <ContactForm hover={hover} select={select} />

      <Map />
    </Layout>
  )
}

export default Contact
