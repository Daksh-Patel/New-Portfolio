import { useState } from "react"

import { Box, HStack } from "@chakra-ui/react"

import Banner from "components/banner"
import SideBar from "components/sidebar"

const HomePage = () => {
  const [select, setSelect] = useState<string>("#64BD00")
  const [hover, setHover] = useState<string>("#427700")

  return (
    <HStack justifyContent='flex-start' w='full'>
      <SideBar select={select} hover={hover} />

      <Box w='full' m='0 !important'>
        <Banner
          hover={hover}
          setHover={setHover}
          select={select}
          setSelect={setSelect}
        />
      </Box>
    </HStack>
  )
}

export default HomePage
