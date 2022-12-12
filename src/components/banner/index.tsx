import { useState } from "react"

import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Show,
  Text,
} from "@chakra-ui/react"
// import { useScroll, motion } from "framer-motion"

import daksh from "assets/images/Daksh.jpg"
import banner from "assets/images/home-banner.jpg"
import BackToTopButton from "components/back-to-top-btn"
import ColorSwitch from "components/color-switch"
import { MediaList } from "configs/media-list"

import BannerBtn from "./banner-btn"
import Media from "./media"
import ScrollDownButton from "./scroll-down-btn"

interface BannerProps {
  setSelect: (select: string) => void
  select: string
  setHover: (hover: string) => void
  hover: string
}

const Banner = (props: BannerProps) => {
  const { setSelect, select, setHover, hover } = props

  const [colorChange, setColorchange] = useState<boolean>(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }

  window.addEventListener("scroll", changeNavbarColor)

  return (
    <Center
      as='section'
      id='home'
      height='100vh'
      backgroundImage={banner}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      position='relative'
      _after={{
        content: "''",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: "rgb(0 0 0 /0.8)",
      }}
    >
      <Container
        maxW='1140px'
        px={{ base: "15px", md: "30px", lg: "15px" }}
        mx='auto'
      >
        <HStack
          alignItems='center'
          justifyContent='center'
          flexDirection={{ base: "column", lg: "row" }}
          spacing={{ base: 0, lg: 12 }}
          position='relative'
          zIndex='1'
          width='full'
        >
          <Box mb={{ base: 2, sm: 5, lg: 0 }}>
            <Image
              src={daksh}
              w='full'
              maxW={{ base: "140px", sm: "180px", md: "220px", lg: "300px" }}
              alt='Daksh-Patel'
              borderRadius='100%'
              border={{
                base: "5px solid rgba(255,255,255,0.1)",
                sm: "8px solid rgba(255,255,255,0.1)",
                md: "10px solid rgba(255,255,255,0.1)",
              }}
            />
          </Box>

          <Box textAlign={{ base: "center", lg: "start" }}>
            <Text
              color='white'
              fontSize={{ base: "14px", sm: "16px", md: "18px" }}
              fontWeight={400}
              letterSpacing={2}
              mb={{ base: 0, sm: "10px", md: "15px" }}
              textTransform='uppercase'
            >
              Hi There!
            </Text>

            <Heading
              as='h1'
              fontSize={{ base: "32px", sm: "35px", md: "46px" }}
              fontWeight='normal'
              color='white'
              mb={{ base: "10px", md: "15px" }}
              display='flex'
              alignItems='center'
              justifyContent={{ base: "center", lg: "flex-start" }}
              textTransform='uppercase'
              letterSpacing={1}
            >
              I&apos;m&nbsp;
              <Text pr='4px' fontWeight='extrabold' color={select}>
                Daksh Patel
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color='white'
              maxW='600px'
              letterSpacing={1}
            >
              I am a Web Developer. A Frontend focused Web Developer building
              the Frontend of Websites and Web Applications that leads to the
              success of the overall product.
            </Text>

            <Media select={select} media={MediaList} />

            <BannerBtn hover={hover} select={select} />
          </Box>
        </HStack>

        <Show above='md'>
          <ScrollDownButton />
        </Show>

        <ColorSwitch
          hover={hover}
          setHover={setHover}
          select={select}
          setSelect={setSelect}
        />
      </Container>

      {colorChange && <BackToTopButton select={select} />}
    </Center>
  )
}
export default Banner
