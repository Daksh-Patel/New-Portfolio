import { Box, keyframes, Link, usePrefersReducedMotion } from "@chakra-ui/react"

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform:translateY(0); }
  40% { transform:translateY(-30px);}
  60% { transform:translateY(-15px);}
`

const scroll = keyframes`
0% { top:10px; opacity:0; }
40% { opacity:1; }
80% { top: 35px; opacity:0; }
100% { opacity:0; }
`

const ScrollDownButton = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const bounceAnimation = prefersReducedMotion
    ? undefined
    : `${bounce} infinite 3s ease`

  const scrollAnimation = prefersReducedMotion
    ? undefined
    : `${scroll} infinite 3s ease`

  return (
    <Box
      position='absolute'
      bottom='5vh'
      left='50%'
      translateX='-50%'
      zIndex={9}
    >
      <Link
        href='#about'
        aria-label='scroll-down'
        width='30px'
        height='60px'
        border='2px solid #FFFFFF'
        display='block'
        borderRadius='50px'
        animation={bounceAnimation}
        _after={{
          content: "''",
          position: "absolute",
          width: "8px",
          height: "8px",
          background: "#FFFFFF",
          borderRadius: "50px",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: scrollAnimation,
        }}
      />
    </Box>
  )
}

export default ScrollDownButton
