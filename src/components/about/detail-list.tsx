import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { BiRightArrow } from "react-icons/bi"

import { DetailsListTypes } from "./types"

type ListProps = {
  data: DetailsListTypes[]
  select: string
}

const DetailsList = (props: ListProps) => {
  const { data, select } = props

  return (
    <List
      display='flex'
      alignItems='center'
      flexWrap='wrap'
      flexDirection={{ base: "column", md: "row" }}
    >
      {data.map((dat) => (
        <ListItem
          key={dat.id}
          fontSize='md'
          display='flex'
          color='#B6B6B6'
          alignItems='center'
          w={{ base: "full", md: "50%" }}
          mb={3}
        >
          <ListIcon as={BiRightArrow} color={select} />
          <Text letterSpacing={1} fontWeight='semibold'>
            {dat.title}:
          </Text>
          &nbsp;&nbsp;{dat.text}
        </ListItem>
      ))}
    </List>
  )
}

export default DetailsList
