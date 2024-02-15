import { HStack } from "@chakra-ui/react"
import { FaUser } from "react-icons/fa"

import PrimaryButton from "components/common/primary-button"



const BannerBtn = () => (
    <HStack
      alignItems='center'
      flexDirection={{ base: "column", md: "row" }}
      spacing={{ base: 0, md: 5 }}
      justifyContent={{ base: "center", lg: "flex-start" }}
    >
      <PrimaryButton
        text='More About Me'
        icon={FaUser}
        href='#about'
        label='about-btn'
        background='#666666'
        bgColor='#444444'
        mb={{ base: "15px", md: "0" }}
      />

      {/* <PrimaryButton
        text='My Portfolio'
        icon={FaBriefcase}
        href='#portfolio'
        label='portfolio-btn'
        background={select}
        bgColor={hover}
      /> */}
    </HStack>
  )


export default BannerBtn
