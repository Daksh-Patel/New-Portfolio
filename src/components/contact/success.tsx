import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"

const Success = () => (
  <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
      Successfully Submitted🤩
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      Your message successfully sent. I will get back to you soon.
    </AlertDescription>
  </Alert>
)

export default Success
