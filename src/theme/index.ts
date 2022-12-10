import { extendTheme } from "@chakra-ui/react"

// Foundational style overrides
import breakpoints from "./foundations/breakpoints"
import colors from "./foundations/colors"
// Global style overrides
import styles from "./styles"
import "@fontsource/poppins"
import "@fontsource/roboto"

const customTheme = extendTheme({
  styles,
  breakpoints,
  colors,
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Roboto", sans-serif`,
  },
})

export default customTheme
