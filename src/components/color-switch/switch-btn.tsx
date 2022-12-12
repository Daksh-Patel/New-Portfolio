import { useCallback } from "react"

import { Button, Icon, usePrefersReducedMotion } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { FaCog } from "react-icons/fa"

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  },
  100% {
    transform: rotate(360deg);
  }
`
interface SwitchBtnProps {
  setToggle: (toggle: boolean) => void
  toggle: boolean
  select: string
  hover: string
}

const SwitchBtn = (props: SwitchBtnProps) => {
  const { setToggle, toggle, select, hover } = props

  const prefersReducedMotion = usePrefersReducedMotion()

  const rotateAnimation = prefersReducedMotion
    ? undefined
    : `${rotate} 2s infinite linear`

  const onSwitchClick = useCallback(() => {
    setToggle(true)

    if (toggle) {
      setToggle(false)
    }
  }, [setToggle, toggle])

  return (
    <Button
      w='40px'
      h='40px'
      minW='0'
      position='absolute'
      aria-label='color-switch'
      right='201.5px'
      top='15px'
      background={select}
      borderRadius={0}
      borderStartRadius='6px'
      transition='0.5s ease'
      onClick={onSwitchClick}
      _hover={{
        background: hover,
      }}
    >
      <Icon as={FaCog} color='white' animation={rotateAnimation} />
    </Button>
  )
}

export default SwitchBtn
