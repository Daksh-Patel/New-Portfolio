import { Text } from "@chakra-ui/react"

interface TextProps {
  text: string
}

const ParagraphText = (props: TextProps) => {
  const { text } = props

  return (
    <Text
      letterSpacing={1}
      fontSize={{ base: "13px", md: "15px" }}
      mb={{ base: "12px", md: "15px" }}
      color='#B6B6B6'
    >
      {text}
    </Text>
  )
}

export default ParagraphText
