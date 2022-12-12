import {
  Box,
  Heading,
  Hide,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react"

interface TitleProps {
  title: string
  subTitle: string
  select: string
  backTitle: string
}

const separate = keyframes`
  0% { top:0; left:0; }
  25% { left:25px; width:25%; }
  50% { left:50px; width:45%; }
  75% { left:75px; width:65%; }
  100% { left:150px; width:80%; }
`

const Title = (props: TitleProps) => {
  const { title, subTitle, backTitle, select } = props

  const prefersReducedMotion = usePrefersReducedMotion()

  const separateAnimation = prefersReducedMotion
    ? undefined
    : `${separate} 3s infinite linear`

  return (
    <Box position='relative'>
      <Heading
        as='h2'
        fontSize={{ base: "30px", sm: "32px", md: "42px" }}
        mb={{ base: "20px", md: "40px", lg: "60px" }}
        letterSpacing={2}
        fontWeight='extrabold'
        textAlign='center'
        position='relative'
        color='white'
        zIndex={9}
        textTransform='uppercase'
      >
        {title}
        <Text as='span' color={select}>
          {subTitle}
        </Text>
      </Heading>

      <Hide below='md'>
        <Text
          as='span'
          position='absolute'
          fontSize='100px'
          letterSpacing={10}
          fontWeight='extrabold'
          top='50%'
          left='0'
          right='0'
          textAlign='center'
          textTransform='uppercase'
          color='rgb(255 255 255 /0.07)'
          transform='translateY(-50%)'
        >
          {backTitle}
        </Text>
      </Hide>

      <Text
        as='span'
        position='absolute'
        width={{ base: "100px", md: "150px" }}
        height='5px'
        borderRadius='5px'
        background='#FAFAFA'
        overflow='hidden'
        bottom='-10px'
        left={0}
        right={0}
        mx='auto'
        _after={{
          content: "' '",
          position: "relative",
          display: "block",
          width: "10px",
          height: "5px",
          background: select,
          borderRadius: "5px",
          left: 0,
          animation: separateAnimation,
        }}
      />
    </Box>
  )
}

export default Title
