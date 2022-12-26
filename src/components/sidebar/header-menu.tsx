import { useEffect } from "react"

import { Icon, Link, VStack } from "@chakra-ui/react"

import { HeaderMenuTypes } from "./types"

interface HeaderMenuProps {
  select: string
  dataList: HeaderMenuTypes[]
  activeItem: string
  setActiveItem: (activeItem: string) => void
}

const HeaderMenu = (props: HeaderMenuProps) => {
  const { dataList, select, activeItem, setActiveItem } = props

  // const [activeItem, setActiveItem] = useState("home")

  useEffect(() => {
    const sections = dataList.map((item) => item.label)
    const handleScroll = () => {
      const { scrollY } = window
      const heights = sections.map((label) => {
        const element = document.querySelector(`#${label}`)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return element ? element.offsetTop : 0
      })
      const index = heights.findIndex((height) => scrollY < height - 50)
      setActiveItem(
        index === -1 ? sections[sections.length - 1] : sections[index - 1],
      )
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [dataList, setActiveItem])

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
          letterSpacing={data.label === activeItem ? "3.5px" : 2}
          color={data.label === activeItem ? select : "white"}
          position='relative'
          transition='all 0.5s ease'
          _hover={{
            textDecoration: "none",
            color: select,
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
