import { Heading } from "@chakra-ui/react"

interface SubTitleProps {
  subTitle: string
}

const SubTitle = (props: SubTitleProps) => {
  const { subTitle } = props

  return (
    <Heading
      as='h3'
      fontSize={{ base: "18px", sm: "21px", md: "28px" }}
      fontWeight='semibold'
      letterSpacing={2}
      textTransform='uppercase'
      color='#FAFAFA'
      textAlign='center'
      mb={{ base: "20px", md: "48px" }}
    >
      {subTitle}
    </Heading>
  )
}
export default SubTitle
