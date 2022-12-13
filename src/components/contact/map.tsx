import { AspectRatio, Box } from "@chakra-ui/react"

const Map = () => (
  <Box>
    <AspectRatio ratio={16 / 9}>
      <iframe
        title='Address Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3399929149577!2d72.55605581542412!3d23.08464661979698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83e7ce603f15%3A0x1af4df2c20a20beb!2sShree%20Nivas%20Residency!5e0!3m2!1sen!2sin!4v1665057251548!5m2!1sen!2sin'
        style={{
          border: 0,
        }}
        loading='lazy'
      />
    </AspectRatio>
  </Box>
)

export default Map
