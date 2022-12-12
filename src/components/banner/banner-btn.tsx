import { HStack } from "@chakra-ui/react"
import { FaBriefcase, FaUser } from "react-icons/fa"

import PrimaryButton from "components/common/primary-button"

interface BannerBtnProps {
  hover: string
  select: string
}

const BannerBtn = (props: BannerBtnProps) => {
  const { hover, select } = props

  return (
    <HStack
      alignItems='center'
      flexDirection={{ base: "column", md: "row" }}
      spacing={{ base: 0, md: 5 }}
      justifyContent={{ base: "center", lg: "flex-start" }}
    >
      <PrimaryButton
        text='More About Me'
        icon={FaUser}
        href='#portfolio'
        label='about-btn'
        background='#666666'
        bgColor='#444444'
      />

      <PrimaryButton
        text='My Portfolio'
        icon={FaBriefcase}
        href='#portfolio'
        label='portfolio-btn'
        background={select}
        bgColor={hover}
      />
    </HStack>
  )
}

export default BannerBtn
