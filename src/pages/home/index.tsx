import { FaUser } from "react-icons/fa"

import ParagraphText from "components/common/paragraph-text"
import PrimaryButton from "components/common/primary-button"

const HomePage = () => (
  <>
    <PrimaryButton
      text='More About Me'
      icon={FaUser}
      href='#about'
      label='primary-btn'
      background='#000000'
      bgColor='red'
    />

    <ParagraphText text='Daksh Patel' />
  </>
)

export default HomePage
