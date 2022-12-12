import { HStack } from "@chakra-ui/react"

import SideBar from "components/sidebar"

const HomePage = () => (
  <HStack justifyContent='flex-start' w='full'>
    <SideBar />
  </HStack>
)

export default HomePage
