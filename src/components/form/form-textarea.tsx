import {
  FormControl,
  FormErrorMessage,
  forwardRef,
  Textarea,
} from "@chakra-ui/react"
import { FieldError } from "react-hook-form"

type FormInputProps = {
  id: string | undefined
  placeholder: string | undefined
  error: FieldError | undefined
  select: string
}

const FormTextArea = forwardRef(
  ({ id, placeholder, error, select, ...rest }: FormInputProps, ref) => (
    <FormControl isInvalid={!!error} isRequired>
      <Textarea
        id={id}
        variant='unstyled'
        resize='none'
        placeholder={placeholder}
        width='100%'
        autoComplete='off'
        py='10px'
        px={{ base: "12px", md: "20px" }}
        ref={ref}
        minH={{ base: "120px", md: "150px" }}
        height='auto'
        fontSize='sm'
        fontWeight='medium'
        background='#2E3135'
        letterSpacing={1}
        border='1px solid'
        borderColor='#424242'
        color='#FAFAFA'
        borderRadius='5px'
        transition='0.5s ease'
        _hover={{
          borderColor: "#424242",
        }}
        _focus={{
          borderColor: select,
          background: "#26282B",
        }}
        {...rest}
      />

      {error && (
        <FormErrorMessage
          fontSize='14px'
          fontWeight='normal'
          color='#ff4141'
          w='full'
        >
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  ),
)

export default FormTextArea
