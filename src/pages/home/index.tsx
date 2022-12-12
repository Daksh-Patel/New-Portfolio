import { useState } from "react"

import { Box, HStack } from "@chakra-ui/react"
import { useScroll, motion } from "framer-motion"

import Banner from "components/banner"
import SideBar from "components/sidebar"

const HomePage = () => {
  const [select, setSelect] = useState<string>("#64BD00")
  const [hover, setHover] = useState<string>("#427700")

  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "5px",
          background: select,
          transformOrigin: "0%",
          zIndex: 99,
        }}
      />
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
    </>
  )
}

export default HomePage
