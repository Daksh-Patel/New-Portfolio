import { useState } from "react"

import { Box, HStack } from "@chakra-ui/react"
import { useScroll, motion } from "framer-motion"

import About from "components/about"
import Banner from "components/banner"
import Contact from "components/contact"
import Portfolio from "components/portfolio"
import Services from "components/services"
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

          <About select={select} hover={hover} />

          <Services select={select} />

          <Portfolio select={select} />

          <Contact select={select} hover={hover} />
        </Box>
      </HStack>
    </>
  )
}

export default HomePage
