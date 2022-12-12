import { Box, Button, Icon, SimpleGrid } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"

import { ColorType } from "./types"

interface ColorsBtnProps {
  setSelect: (select: string) => void
  select: string
  setHover: (hover: string) => void
  data: ColorType[]
}

const ColorsBtn = (props: ColorsBtnProps) => {
  const { setSelect, select, data, setHover } = props

  return (
    <SimpleGrid
      columns={4}
      px='16px'
      py='24px'
      justifyItems='center'
      spacing={3}
    >
      {data.map((dat) => (
        <Box key={dat.id}>
          <Button
            w='35px'
            h='35px'
            minW={0}
            aria-label={dat.label}
            background={dat.color}
            borderRadius='10px'
            _hover={{ background: dat.color }}
            onClick={() => {
              setSelect(dat.color)
              setHover(dat.hover)
            }}
          >
            {select === dat.color && <Icon as={FaCheck} color='white' />}
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default ColorsBtn
