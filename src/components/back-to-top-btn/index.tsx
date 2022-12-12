import { Circle, Icon, Link } from "@chakra-ui/react"
import { FaAngleDoubleUp } from "react-icons/fa"

interface BackToTopButtonProps {
  select: string
}

const BackToTopButton = (props: BackToTopButtonProps) => {
  const { select } = props

  return (
    <Link
      href='#home'
      rel='alternate'
      aria-label='back-to-top'
      position='fixed'
      bottom='20px'
      right='20px'
      zIndex={999}
    >
      <Circle
        size='40px'
        bg='#26282B'
        color='white'
        transition='0.3s ease'
        boxShadow='0 0 2px #F2F2F2'
        _hover={{ bg: select }}
      >
        <Icon as={FaAngleDoubleUp} />
      </Circle>
    </Link>
  )
}

export default BackToTopButton
