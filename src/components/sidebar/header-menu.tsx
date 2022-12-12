import { Icon, Link, VStack } from "@chakra-ui/react"

import { HeaderMenuTypes } from "./types"

interface HeaderMenuProps {
  //   select: string
  dataList: HeaderMenuTypes[]
}

const HeaderMenu = (props: HeaderMenuProps) => {
  const { dataList } = props

  return (
    <VStack alignItems='flex-start' spacing={{ base: 4, md: 6, "2xl": 8 }}>
      {dataList.map((data) => (
        <Link
          key={data.id}
          rel='preconnect'
          href={data.href}
          aria-label={data.label}
          fontSize={{ base: "smaller", md: "sm" }}
          textTransform='uppercase'
          fontWeight='bold'
          letterSpacing={2}
          color='white'
          position='relative'
          transition='all 0.5s ease'
          _hover={{
            textDecoration: "none",
            // color: select,
            letterSpacing: "3.5px",
          }}
        >
          <Icon as={data.icon} mr='10px' />
          {data.item}
        </Link>
      ))}
    </VStack>
  )
}

export default HeaderMenu
