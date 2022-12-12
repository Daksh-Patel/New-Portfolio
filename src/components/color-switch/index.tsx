import { useState } from "react"

import { Box, Divider, Text } from "@chakra-ui/react"

import { Colors } from "configs/colors-list"

import ColorsBtn from "./colors-btn"
import SwitchBtn from "./switch-btn"

interface ColorSwitchProps {
  setSelect: (select: string) => void
  select: string
  setHover: (select: string) => void
  hover: string
}

const ColorSwitch = (props: ColorSwitchProps) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const { setSelect, select, setHover, hover } = props

  return (
    <Box
      position='fixed'
      top='100px'
      transition='ease 0.5s'
      right={toggle ? "0" : "-202px"}
      zIndex={99}
      width='202px'
      background='#2E3135'
      borderStartRadius='8px'
      boxShadow='0 3px 20px 0 rgb(0 0 0 / 10%)'
    >
      <SwitchBtn
        toggle={toggle}
        hover={hover}
        select={select}
        setToggle={setToggle}
      />

      <Text
        fontSize='md'
        fontWeight='semibold'
        textAlign='center'
        color='white'
        textTransform='uppercase'
        py='15px'
      >
        Choose Color
      </Text>

      <Divider borderColor='#424242' />

      <ColorsBtn
        setHover={setHover}
        select={select}
        setSelect={setSelect}
        data={Colors}
      />
    </Box>
  )
}

export default ColorSwitch
